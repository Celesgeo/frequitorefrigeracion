import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/config/site";
import { clientTypes, serviceOptions } from "@/data/content";
import { trackEvent } from "@/lib/analytics";
import { buildContactWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { Clock3, MapPin, MessageCircle } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";

type FormState = {
  name: string;
  phone: string;
  locality: string;
  clientType: string;
  service: string;
  brandModel: string;
  description: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  locality: "La Rioja Capital",
  clientType: "",
  service: "",
  brandModel: "",
  description: "",
  consent: false,
};

export function Contact() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [openedWhatsApp, setOpenedWhatsApp] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const clientLabel = clientTypes.find((item) => item.value === values.clientType)?.label ?? values.clientType;
    const serviceLabel = serviceOptions.find((item) => item.value === values.service)?.label ?? values.service;
    const message = buildContactWhatsAppMessage({
      name: values.name.trim(),
      phone: values.phone.trim(),
      locality: values.locality.trim(),
      clientType: clientLabel,
      service: serviceLabel,
      brandModel: values.brandModel,
      description: values.description,
    });

    trackEvent("form_submit", { destination: "whatsapp" });
    trackEvent("whatsapp_click", { location: "form" });
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setOpenedWhatsApp(true);
  }

  return (
    <section id="contacto" className="border-t border-line bg-ivory py-20 md:py-28">
      <div className="container-shell grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionHeading
            kicker="Contacto"
            title="Contanos el problema y coordinamos el diagnóstico."
            lead="El formulario no envía un correo. Al confirmar, se abre WhatsApp con los datos ordenados para responder la consulta."
          />

          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex gap-3 text-muted">
              <MessageCircle size={18} className="mt-0.5 text-graphite" />
              <span>
                WhatsApp
                <a
                  className="mt-0.5 block font-medium text-graphite underline-offset-4 hover:underline"
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "contact_info" })}
                >
                  {site.whatsapp.display}
                </a>
              </span>
            </li>
            <li className="flex gap-3 text-muted">
              <MapPin size={18} className="mt-0.5 text-graphite" />
              {site.locationLabel}
            </li>
            <li className="flex gap-3 text-muted">
              <Clock3 size={18} className="mt-0.5 text-graphite" />
              {site.hoursLabel}
            </li>
          </ul>
        </div>

        <form className="border-t border-line pt-8 text-ink lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12" onSubmit={onSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Nombre"
                error={errors.name}
                htmlFor="name"
              >
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  onChange={(event) => update("name", event.target.value)}
                />
              </Field>
              <Field label="Teléfono" error={errors.phone} htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={values.phone}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  onChange={(event) => update("phone", event.target.value)}
                />
              </Field>
              <Field label="Localidad" error={errors.locality} htmlFor="locality">
                <input
                  id="locality"
                  name="locality"
                  value={values.locality}
                  aria-invalid={Boolean(errors.locality)}
                  aria-describedby={errors.locality ? "locality-error" : undefined}
                  onChange={(event) => update("locality", event.target.value)}
                />
              </Field>
              <Field label="Tipo de cliente" error={errors.clientType} htmlFor="clientType">
                <select
                  id="clientType"
                  name="clientType"
                  value={values.clientType}
                  aria-invalid={Boolean(errors.clientType)}
                  aria-describedby={errors.clientType ? "clientType-error" : undefined}
                  onChange={(event) => update("clientType", event.target.value)}
                >
                  <option value="">Seleccionar</option>
                  {clientTypes.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Servicio requerido" error={errors.service} htmlFor="service">
                <select
                  id="service"
                  name="service"
                  value={values.service}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? "service-error" : undefined}
                  onChange={(event) => update("service", event.target.value)}
                >
                  <option value="">Seleccionar</option>
                  {serviceOptions.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Marca o modelo (opcional)" htmlFor="brandModel">
                <input
                  id="brandModel"
                  name="brandModel"
                  value={values.brandModel}
                  onChange={(event) => update("brandModel", event.target.value)}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Descripción del problema" error={errors.description} htmlFor="description">
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={values.description}
                  aria-invalid={Boolean(errors.description)}
                  aria-describedby={errors.description ? "description-error" : undefined}
                  onChange={(event) => update("description", event.target.value)}
                />
              </Field>
            </div>

            <div className="mt-5">
              <label className="flex items-start gap-3 text-sm text-ink">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-graphite"
                  checked={values.consent}
                  aria-invalid={Boolean(errors.consent)}
                  onChange={(event) => update("consent", event.target.checked)}
                />
                <span>
                  Acepto que Fresquito utilice estos datos únicamente para responder esta consulta.
                  {errors.consent ? (
                    <span id="consent-error" className="mt-1 block text-xs font-medium text-red-700">
                      {errors.consent}
                    </span>
                  ) : null}
                </span>
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button type="submit" className="btn btn-whatsapp">
                Enviar consulta por WhatsApp
              </button>
              <ButtonLink href={buildWhatsAppUrl()} variant="secondaryDark" target="_blank" rel="noopener noreferrer">
                Abrir WhatsApp directo
              </ButtonLink>
            </div>

            {openedWhatsApp ? (
              <p className="mt-4 text-sm text-whatsapp" role="status">
                WhatsApp se abrió con tu consulta. Si no ves la ventana, permití pop-ups o usá el botón de WhatsApp.
              </p>
            ) : (
              <p className="mt-4 text-sm text-muted">
                Al enviar se abre una conversación con {site.whatsapp.display}. No se simula el envío de un email.
              </p>
            )}
          </form>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {error ? (
        <span id={`${htmlFor}-error`} className="text-xs font-medium text-red-700">
          {error}
        </span>
      ) : null}
    </div>
  );
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = "Ingresá tu nombre.";
  if (digits(values.phone).length < 8) errors.phone = "Ingresá un teléfono válido.";
  if (values.locality.trim().length < 3) errors.locality = "Ingresá la localidad.";
  if (!values.clientType) errors.clientType = "Seleccioná el tipo de cliente.";
  if (!values.service) errors.service = "Seleccioná el servicio.";
  if (values.description.trim().length < 10) {
    errors.description = "Describí el problema con un poco más de detalle.";
  }
  if (!values.consent) errors.consent = "Necesitamos tu consentimiento para usar los datos de la consulta.";
  return errors;
}

function digits(value: string) {
  return value.replace(/\D/g, "");
}

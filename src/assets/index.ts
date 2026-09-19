/**
 * Visual assets map.
 *
 * images/technician-outdoor.jpg    Hero outdoor-unit service scene. Replace in place.
 * images/service-aire.webp         Ceiling AC service. Services only.
 * images/service-heladera.webp     Refrigeration repair. Services only.
 * images/service-carga-gas.png     Vacuum / gas service. Services only.
 * video/trabajo-en-obra.mp4        Fixed scroll background clip.
 *
 * Atmospheric images are illustrative and never presented as Fresquito job photos.
 */
import serviceAire from "@/assets/images/service-aire.webp";
import serviceCargaGas from "@/assets/images/service-carga-gas.png";
import serviceHeladera from "@/assets/images/service-heladera.webp";
import technicianOutdoor from "@/assets/images/technician-outdoor.jpg";
import workVideoPoster from "@/assets/video/trabajo-en-obra.jpg";
import workVideo from "@/assets/video/trabajo-en-obra.mp4";

export const images = {
  technicianOutdoor,
  serviceAire,
  serviceHeladera,
  serviceCargaGas,
  workVideoPoster,
} as const;

export const videos = {
  work: workVideo,
  workPoster: workVideoPoster,
} as const;

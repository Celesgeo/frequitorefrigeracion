FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
COPY package.json ./
COPY --from=build /app/dist ./dist
COPY scripts/start.mjs ./scripts/start.mjs
CMD ["node", "scripts/start.mjs"]

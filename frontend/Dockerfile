# ---------- Build Stage ----------
FROM node:20-alpine AS build

WORKDIR /app

# ✅ Build arguments
ARG VITE_REACT_APP_API_URL
ARG VITE_REACT_APP_MOVIE_API_URL
ARG VITE_NOTIFICATION_API_URL

# Make them available to Vite
ENV VITE_REACT_APP_API_URL=$VITE_REACT_APP_API_URL
ENV VITE_REACT_APP_MOVIE_API_URL=$VITE_REACT_APP_MOVIE_API_URL
ENV VITE_NOTIFICATION_API_URL=$VITE_NOTIFICATION_API_URL

# Copy package files
COPY package*.json ./

RUN npm install

COPY . .

RUN chmod -R +x node_modules/.bin

# Vite reads env vars HERE
RUN npm run build


# ---------- Production Stage ----------
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

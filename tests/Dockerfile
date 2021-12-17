FROM mcr.microsoft.com/playwright:v1.17.0-focal
WORKDIR /app

ARG BASE_URL
ENV BASE_URL=${BASE_URL}

COPY . .
RUN npm install && npx playwright install && npm install -g npm

CMD ["/bin/bash", "entrypoint.sh"]

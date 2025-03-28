FROM node:18-alpine

WORKDIR /app

# 1. Installation d'Angular CLI
RUN npm install -g @angular/cli

CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "1000"]
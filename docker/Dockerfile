FROM node:18-alpine
WORKDIR /app

COPY package*.json ./ 
COPY prisma ./prisma/

RUN npm ci

COPY . .

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000
CMD ["npm", "start"]

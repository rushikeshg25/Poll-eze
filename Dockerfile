FROM node:20-alpine

WORKDIR /user/src/app

COPY package*.json package-lock.json ./
COPY prisma ./prisma

RUN npm install

COPY . .

CMD ["npm", "run", "dev:docker"]
FROM node:13
WORKDIR /app/client/

COPY package.json .
COPY ./src/lib ./src/lib

RUN npm install -g typescript
RUN npm install
RUN npm rebuild node-sass

COPY . .

RUN npm run build
EXPOSE 3000

CMD ["npm", "run",  "start"]
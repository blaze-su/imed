FROM node:13
WORKDIR /app/client/
COPY package.json .
RUN npm install -g typescript
RUN npm install
RUN npm rebuild node-sass
COPY . .
CMD ["npm", "run",  "start"]
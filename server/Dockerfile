FROM node:13
WORKDIR /app/server/
COPY package.json .
RUN npm install -g typescript tspath nodemon
RUN npm install
COPY . .
CMD ["npm", "run", "start-server"]

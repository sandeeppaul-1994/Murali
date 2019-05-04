FROM node:8
WORKDIR /usr/src/app
COPY . .
#COPY package*.json ./
RUN npm install
EXPOSE 3022
CMD [ "npm", "start" ]

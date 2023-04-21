FROM node:14.21.1

WORKDIR /usr/src/wallet/wallet-server
COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]

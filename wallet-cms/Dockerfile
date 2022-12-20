FROM node:18.12.0

# Copy source files
WORKDIR usr/src/wallet
COPY . .

# Build wallet-cms
RUN npm install
RUN npm run build

RUN echo $DB_HOST
RUN echo $DB_PORT

# Start wallet-cms
CMD ["npm", "run", "start"]

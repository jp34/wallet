FROM node:14.21.1

# Copy source files
WORKDIR /usr/src/wallet
COPY . .

# Build wallet-cms
RUN npm install
RUN npm run build

# Start wallet-cms
CMD ["npm", "run", "start"]

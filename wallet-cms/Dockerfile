FROM node:18.12.0

# Copy source files
WORKDIR usr/src/wallet
COPY . .

# Build wallet-cms
RUN npm install
RUN npm run build

# Start wallet-cms
CMD ["npm", "run", "start"]

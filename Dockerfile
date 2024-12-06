# Use uma imagem base adequada para o Node.js
FROM node:18-alpine

# Defina o diretório de trabalho na imagem
WORKDIR /app

# Copie os arquivos necessários
COPY package.json package-lock.json ./
COPY . .

# Instale dependências com --force
RUN npm install --force

# Compile o projeto (se necessário)
RUN npm run build

# Exponha a porta que a aplicação usa
EXPOSE 3000

# Inicie o servidor
CMD ["npm", "start"]

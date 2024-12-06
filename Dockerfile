FROM node:18-alpine

WORKDIR /app

# Instalar dependências e exportar o site
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build && npm run export

# Instalar o serve para servir os arquivos estáticos
RUN npm install --force -g serve

# Rodar o servidor estático
CMD ["serve", "-s", "out", "-l", "3000"]
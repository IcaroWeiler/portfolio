# Use a imagem oficial do Node.js como base
FROM node:18-alpine

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install --force

# Copie o restante dos arquivos do projeto
COPY . .

# Execute o build e exportação para uma aplicação estática
RUN npm run build

# Instale o serve (para servir a aplicação estática)
RUN npm install --force -g serve

# Comando para servir a aplicação estática gerada na pasta 'out'
CMD ["serve", "-s", "out", "-l", "3000"]

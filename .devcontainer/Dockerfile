# Usa una imagen base con Node.js
FROM mcr.microsoft.com/devcontainers/typescript-node:20

# Establece el directorio de trabajo
WORKDIR /workspace

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala dependencias globales necesarias
RUN npm install -g aws-cdk

# Instala las dependencias del proyecto
RUN npm install

# Copia todos los archivos al contenedor
COPY . .

# Expone el puerto (opcional)
EXPOSE 3000
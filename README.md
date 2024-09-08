# Descripción

Esta aplicación que desarrollé es un E-commerce completo llamado "TesloShop". Es mi proyecto final del curso de Next.js, en DevTalles de Fernando Herrera .

- Utilicé Next.js, Typescript, Tailwind y Zustand.
- Para la base de datos PostgreSQL, Docker y Prisma.
- El proyecto se encuentra desplegado en Vercel.

## Correr en dev

1. Clonar el repositorio.
2. Crear una copia del `.env.template` y renombrarlo a `.env` y cambiar las variables de entorno.
3. Instalar dependencias `npm install`
4. Levantar la base de datos `docker compose up -d`
5. Correr las migraciones de Prisma `npx prisma migrate dev`
6. Ejecutar seed `npm run seed`
7. Correr el proyecto `npm run dev`
8. Limpiar el localStorage del navegador.

## Correr en prod

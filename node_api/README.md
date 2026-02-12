# Node API (Express + Sequelize + JWT)

Proyecto base para APIs REST con autenticación JWT, Sequelize y PostgreSQL.

## Características
- Express + Helmet
- Sequelize (ORM)
- Autenticación JWT
- Docker + docker-compose
- Pipeline CI básico (GitHub Actions)

## Endpoints
- `GET /health`
- `POST /auth/signup`
- `POST /auth/login`

## Variables de entorno
Copiar el archivo `.env.example` a `.env`.

## Uso con Docker
1. Construir y levantar: `docker compose up --build`
2. La DB se sincroniza con `sequelize.sync()` al iniciar.

## Seguridad
- Uso de `JWT_SECRET`
- Hashing de contraseñas con `bcryptjs`

## Notas
Este es un esqueleto inicial para entrevistas: se pueden añadir OAuth, rate limiting y scopes.

## Front-end y consumo de APIs
Pensado para integrarse con clientes que manejen estado con Redux, Vuex o Context API.
Los endpoints usan JSON y códigos HTTP estándar.

## Microservicios y despliegue
- Fácil de separar en servicios (auth, users, orders) con API Gateway.
- Pipeline CI/CD básico con GitHub Actions.
- Preparado para AWS (ECS/Fargate o EC2) mediante Docker.

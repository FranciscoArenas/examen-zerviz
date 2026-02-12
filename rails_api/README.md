# Rails API (ActiveRecord + JWT)

Proyecto base para APIs REST con autenticación JWT, ActiveRecord y PostgreSQL.

## Características
- Rails API mode
- ActiveRecord + PostgreSQL
- Autenticación JWT
- CORS habilitado
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
2. Migraciones: `docker compose exec api bundle exec rails db:migrate`

## Seguridad
- Uso de `JWT_SECRET`
- Validación de credenciales con `bcrypt`

## Notas
Este es un esqueleto inicial para entrevistas: se pueden añadir OAuth, rate limiting y scopes.

## Front-end y consumo de APIs
Se recomienda consumir esta API desde clientes que manejen estado con Redux, Vuex o Context API.
Los endpoints se exponen con respuestas JSON uniformes para facilitar la integración.

## Microservicios y despliegue
- Pensado para dividir en servicios (auth, users, billing) con colas o eventos.
- Listo para CI/CD con GitHub Actions.
- Preparado para desplegar en AWS (ECS/Fargate o EC2) usando Docker.

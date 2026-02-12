# Proyectos de evaluación

Se crearon dos proyectos base:
- Rails API: [rails_api/README.md](rails_api/README.md)
- Node API: [node_api/README.md](node_api/README.md)

Ambos incluyen:
- REST APIs
- Autenticación JWT (SSO centralizado en Rails)
- ORM (ActiveRecord / Sequelize)
- Docker y docker-compose
- Pipeline CI/CD básico
- Preparación para despliegue en AWS

## Orquestación conjunta
Levanta ambos servicios y sus bases de datos con el compose raíz:
- docker compose up --build

## Seguridad
- Rails emite access/refresh tokens.
- Node valida el JWT emitido por Rails sin consultar su DB.

## Comunicación entre servicios
- Node consume la salud de Rails en /rails/health.

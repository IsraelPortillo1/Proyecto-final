# Proyecto Mocking API

## 📦 Instalación

```bash
npm install
```

## ▶️ Uso local

```bash
npm run dev
```

## 🐳 Docker

```bash
docker build -t tuusuario/mocking-api .
docker run -p 8080:8080 tuusuario/mocking-api
```

## 🔗 Endpoints disponibles

- `GET /api/mocks/mockingusers` → Genera 50 usuarios falsos
- `GET /api/mocks/mockingpets` → Genera 10 mascotas falsas
- `POST /api/mocks/generateData` → Inserta registros en Mongo (body: `{ "users": 10, "pets": 10 }`)
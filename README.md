# 🚀 API REST TechLab - E-Commerce Backend

## 🧑‍💻 Autor
**ERICA Cleppe**

Este proyecto es la implementación de un **Backend de E-Commerce** (Proyecto Final) creado con **Node.js** y **Express**, utilizando **Firebase Firestore** como base de datos NoSQL.

El enfoque principal es la seguridad y la arquitectura por capas, implementando un sistema de autenticación basado en **JSON Web Tokens (JWT)** para proteger los recursos.

---

## ✨ Características Principales

* **Arquitectura Modular:** Separación de responsabilidades en las capas de Rutas, Controladores, Servicios y Modelos.
* **Base de Datos:** Conexión y operaciones CRUD a **Firebase Firestore**.
* **Seguridad:** Implementación de **Autenticación (Login)** con generación de JWT.
* **Middleware de Seguridad:** Todas las rutas de productos están protegidas por el *middleware* `verifyToken`.
* **Tecnologías:** Servidor Express, CORS configurado, variables de entorno con `dotenv`.
* **Testing:** Probado con Postman.

---

## 📂 Estructura del Proyecto

/
├── .env
├── .gitignore
├── vercel.json
├── package.json
├── index.js              
└── src/
    ├── config/
    │   └── firebase.config.js  
    ├── controllers/
    │   ├── auth.controller.js  
    │   └── products.controller.js  
    ├── middlewares/
    │   └── auth.middleware.js  
    ├── models/
    │   ├── auth.model.js       
    │   └── product.model.js    
    ├── routes/
    │   ├── auth.routes.js      
    │   └── products.routes.js  
    └── services/
        ├── auth.service.js     
        └── products.service.js

import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import productsRoutes from './src/routes/products.routes.js';
import authRoutes from './src/routes/auth.routes.js'; // Importar rutas de autenticación

const app = express();

const PORT = process.env.PORT || 3000; 

app.use(cors());

app.use(bodyParser.json()); 

app.get('/', (req, res) => {
    res.send('🚀 API Rest de Productos TechLab Funcionando');
});

// Rutas de la API de Productos
app.use('/api/products', productsRoutes); 

// Rutas de Autenticación (Login)
app.use('/api/auth', authRoutes);


app.use((req, res, next) => {
    res.status(404).json({
        message: 'Ruta no encontrada (404)',
        ruta: req.originalUrl,
        metodo: req.method
    });
});

app.listen(PORT, () => {
    console.log(`✅ Servidor Express escuchando en http://localhost:${PORT}`);
});
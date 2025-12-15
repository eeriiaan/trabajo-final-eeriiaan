import * as productService from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json({ 
            data: products 
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Error al obtener la lista de productos', 
            error: error.message 
        });
    }
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productService.getProductById(id);
        
        // El servicio lanzará un error si el producto no existe, que será capturado por el catch.
        res.status(200).json({ 
            data: product 
        });
    } catch (error) {
        // Asumiendo que si no lo encuentra, el servicio lanza un error específico.
        if (error.message.includes("no encontrado")) {
             return res.status(404).json({ 
                message: error.message 
            });
        }
        res.status(500).json({ 
            message: 'Error al obtener el producto', 
            error: error.message 
        });
    }
};

export const createProduct = async (req, res) => {
    try {
        const newProductData = req.body;
        
        // Validación básica de que el body no esté vacío
        if (Object.keys(newProductData).length === 0) {
            return res.status(400).json({ // 400 Bad Request
                message: 'El cuerpo de la petición no puede estar vacío.'
            });
        }
        
        const newProduct = await productService.createProduct(newProductData);
        
        res.status(201).json({ 
            message: 'Producto creado exitosamente', 
            data: newProduct 
        });
    } catch (error) {
        // 400 Bad Request ante errores en los datos enviados
        res.status(400).json({
            message: 'Error al crear el producto', 
            error: error.message 
        });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedId = await productService.deleteProduct(id);
        
        res.status(200).json({ 
            message: `Producto con ID: ${deletedId} eliminado exitosamente` 
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Error al eliminar el producto', 
            error: error.message 
        });
    }

};
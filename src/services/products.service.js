 import * as productModel from '../models/products.model.js';

export const getAllProducts = async () => {
    try {
        const products = await productModel.getAll();
        return products;
    } catch (error) {
        throw new Error(`Error en el servicio al obtener todos los productos: ${error.message}`);
    }
};

export const getProductById = async (id) => {
    try {
        const product = await productModel.getById(id);
        if (!product) {
            throw new Error(`Producto con ID ${id} no encontrado.`); 
        }
        return product;
    } catch (error) {
        throw new Error(`Error en el servicio al obtener producto por ID: ${error.message}`);
    }
};

export const createProduct = async (productData) => {
    try {
       
        const newProduct = await productModel.create(productData);
        return newProduct;
    } catch (error) {
        throw new Error(`Error en el servicio al crear producto: ${error.message}`);
    }
};

export const deleteProduct = async (id) => {
    try {
        const deletedId = await productModel.remove(id);
        return deletedId;
    } catch (error) {
        throw new Error(`Error en el servicio al eliminar producto: ${error.message}`);
    }
};

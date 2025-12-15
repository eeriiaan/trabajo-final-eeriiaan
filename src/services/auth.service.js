import * as authModel from '../models/auth.model.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET; 

export const login = async (username, password) => {
    const user = authModel.findUserByCredentials(username, password);

    if (!user) {
        throw new Error("Credenciales inválidas");
    }

    const token = jwt.sign(
        { username: user.username, role: user.role }, 
        JWT_SECRET, 
        { expiresIn: '1h' }
    );

    return token;
};
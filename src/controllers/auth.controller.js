 import * as authService from '../services/auth.service.js';

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: 'Faltan credenciales: se requiere username y password.'
            });
        }

        const token = await authService.login(username, password);

        res.status(200).json({
            message: 'Autenticación exitosa',
            token: token
        });

    } catch (error) {
        res.status(400).json({ 
            message: 'Error de autenticación', 
            error: error.message 
        });
    }
};

import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const verifyToken = (req, res, next) => {
    // 1. Obtener el token del header Authorization
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ 
            message: 'Acceso denegado. No se proporcionó token.' 
        });
    }

    // El header viene como "Bearer [token]"
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ 
            message: 'Acceso denegado. Formato de token incorrecto.' 
        });
    }

    try {
        // 2. Verificar el token usando la clave secreta
        const decoded = jwt.verify(token, JWT_SECRET);
        
        // 3. Adjuntar la información del usuario (payload) al objeto request
        req.user = decoded; 
        
        // 4. Continuar con la siguiente función (el controlador de la ruta)
        next(); 

    } catch (error) {
        // Manejar tokens inválidos o expirados
        return res.status(403).json({ 
            message: 'Token inválido o expirado.', 
            error: error.message
        });
    }
};
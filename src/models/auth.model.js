 // Simulamos una base de datos de usuarios (hardcoded)
const users = [
    { username: 'test@gmail.com', password: '123456', role: 'admin' }
];

export const findUserByCredentials = (username, password) => {
    const user = users.find(
        u => u.username === username && u.password === password
    );
    
    // Devolvemos el usuario sin la contraseña para mayor seguridad
    if (user) {
        const { password, ...userWithoutPass } = user;
        return userWithoutPass;
    }
    
    return null;
};

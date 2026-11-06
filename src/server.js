import app from './app.js';
import sequelize from './config/database.js';
import './models/index.js';

async function startServer() {
    try {
        if (process.env.NODE_ENV !== "production") {
            await sequelize.sync({ alter: true })
        }

        app.listen(process.env.PORT, () => {
            console.log("Servidor rodando com sucesso!")    
        })
    } catch (error) {
        console.error("erro ao inicializaro servidor:", error)
    }
}

startServer()
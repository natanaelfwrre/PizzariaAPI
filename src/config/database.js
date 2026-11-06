import { Sequelize } from 'sequelize';

const NAME = process.env.DB_NAME
const USER = process.env.DB_USER
const PASSWORD = process.env.DB_PASSWORD

const sequelize = new Sequelize(NAME, USER, PASSWORD, {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    logging: false
})

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Conexão com o PosgreSQL estabelecida com sucesso!")
    } catch (error) {
        console.error("Não foi possivel estabelecer a conexão com o banco")
    }
}

testConnection()

export default sequelize
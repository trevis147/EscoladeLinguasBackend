import { Sequelize } from 'sequelize'


const sequelizeConnection = new Sequelize("Escoladelinguas", "login", "senha", {
    host: "localhost",
    port:3306,
    dialect: "mysql",
    logging:true
  })
  
export default sequelizeConnection


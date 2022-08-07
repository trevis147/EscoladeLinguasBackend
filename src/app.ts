import express from "express"
import cors from 'cors'

import routes from './main/routes/routes'
import sequelizeConnection from "./infra/connectDB/mysql"
import MysqlTables from "./main/connectstring/mysqlTables"


require('dotenv').config()

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares(): void {
        const opt: cors.CorsOptions = {
            methods: "GET,OPTIONS,PUT,POST,DELETE",
            origin: "*",
        }

        this.express.use(cors(opt))

        this.express.use(express.json())
    }

    private async database(): Promise<void> {
        // Mongodb()
        await sequelizeConnection.sync()
        await MysqlTables.AsyncTables()

    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express

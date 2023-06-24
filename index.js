import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'

import { ConfigDataBaseController, ProductController } from './controllers/index.js'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5555

export const db = mysql.createConnection({
    host: '192.168.0.222',
    port: 3306,
    user: 'root',
    password: 'is410601',
    database: 'mda'
})

db.connect(error => {
    if (error) throw console.log('Ошибка подключения к серверу: ' + error)
    console.log('Успешное подключение к серверу.')
})

app.get('/create-database', ConfigDataBaseController.createDataBase)
app.get('/create-product-tabel', ConfigDataBaseController.createProductTabel)

app.get('/product-all', ProductController.getAllProducts)
app.post('/product-add', ProductController.postAddProduct)
app.delete('/product-delete/:id', ProductController.deleteProduct)

app.get('/', (_, res) => res.send('Сервер запущен.'))

app.listen(PORT, error => {
    if (error) throw console.log('Ошибка при запуске сервера', error)
    console.log('Сервер запущен на порту: ' + PORT)
})
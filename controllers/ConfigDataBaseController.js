import { db } from "../index.js"

export const createDataBase = (_, res) => {
    const sql = `CREATE DATABASE mda`

    db.query(sql, (error, result) => {
        if (error) throw console.log('Ошибка создания базы данных: ' + error)
        console.log(result)
        res.send('База данных создана.')
    })
}

export const createProductTabel = (_, res) => {
    const sql = `
        CREATE TABLE products(id int AUTO_INCREMENT, title VARCHAR(255), price DOUBLE(50, 2), quantity INT(50), PRIMARY KEY (id))
    `
    db.query(sql, (error, result) => {
        if (error) throw console.log('Ошибка создания таблицы: ' + error)
        console.log(result)
        res.send('Таблица "products" создана.')
    })
}
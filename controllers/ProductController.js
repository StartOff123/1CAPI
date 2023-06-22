import { db } from "../index.js"

export const getAllProducts = (req, res) => {
    try {
        const sql = `SELECT * FROM products`

        db.query(sql, (error, result) => {
            if (error) {
                console.log('Ошибка получиения всех данных из таблицы "products": ' + error)
                throw res.status(400).json({
                    message: 'Ошибка получиения всех данных из таблицы "products"',
                    error
                })
            }

            res.json(result)
        })
    } catch (error) {
        console.log('Ошибка получиения всех данных из таблицы "products": ' + error)
        res.status(400).json({
            message: 'Ошибка получиения всех данных из таблицы "products"',
            error
        })
    }
}

export const postAddProduct = (req, res) => {
    try {
        const sql = `INSERT INTO products (title, price, quantity) VALUES (?, ?, ?)`

        db.query(sql, [req.body.title, req.body.price, req.body.quantity], (error, result) => {
            if (error) {
                console.log('Ошибка при записи данных в таблицу "products": ' + error)
                throw res.status(400).json({
                    message: 'Ошибка при записи данных в таблицу "products"',
                    error
                })
            }

            res.json(result)
        })

    } catch (error) {
        console.log('Ошибка при записи данных в таблицу "products": ' + error)
        res.status(400).json({
            message: 'Ошибка при записи данных в таблицу "products"',
            error
        })
    }
}

export const deleteProduct = (req, res) => {
    try {
        const sql = `DELETE FROM products WHERE id = ${req.body.id}`
        db.query(sql, (error, result) => {
            if (error) {
                console.log('Ошибка при удалении данных в таблице "products": ' + error)
                throw res.status(400).json({
                    message: 'Ошибка при удалении данных в таблице "products""',
                    error
                })
            }

            res.json({
                succsess: true
            })
        })
    } catch (error) {
        console.log('Ошибка при удалении данных в таблице "products": ' + error)
        res.status(400).json({
            message: 'Ошибка при удалении данных в таблице "products""',
            error
        })
    }
}
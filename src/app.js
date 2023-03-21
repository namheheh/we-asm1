import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.js";
// import routers from "../router/product.js";
// app.use(routers)

const app = express();
app.use(express.json());
app.get('/product', async (req, res) => {
    try {
        const product = await Product.find(req.body)
        if (product === 0) {
            return res.status(404).json({
                message: "khong co san pham nao"
            })
        }
        return res.json({
            message: "hien thi san pham thanh cong",
            product,
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
})

app.get('/product/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (product === null) {
            return res.status(404).json({
                message: "khong co san pham nao"
            })
        }
        return res.json({
            message: "hien thi san pham theo id thanh cong",
            product,
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
})

app.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        if (product === 0) {
            return res.status(404).json({
                message: "them san pham khong thanh cong"
            })
        }
        return res.json({
            message: "them san pham thanh cong",
            product,
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
})

app.put('/product/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if (product === 0) {
            return res.status(404).json({
                message: "khong co san pham nao"
            })
        }
        return res.json({
            message: "sua san pham thanh cong",
            product,
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
})

app.delete('/product/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id, req.body)
        return res.json({
            message: "xoa san pham thanh cong",
            product,
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
})

app.listen(8080, () => {
    console.log("hello")
})
mongoose.connect("mongodb://127.0.0.1:27017/asm1")
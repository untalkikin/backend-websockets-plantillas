import express from "express";
import { _dirname } from "./utils.js"
import { Server } from "engine.io";

const app = express();
const PORT = 8080;

//Reset port
const httpserver = app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})

//Implementation of socket io
const io = new Server(httpserve)

io.on('conection', (socket)=>{
    console.log('Servidor socket io conectado');

    socket.on('nuevoProducto', async (nuevoProd)=>{
        const response = await manager.addProduct(nuevoProd)
        console.log(response)
        const products = await manager.gerProducts()
        socket.emit('products-data', products)
        socket.emit("status-changed", response)
    })


    socket.on('update-products', async () =>{
        const products = await manager.gerProducts();
        socket.emit('products-data', products);
    })
})
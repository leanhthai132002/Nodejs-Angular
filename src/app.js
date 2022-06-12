
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

import productsRouter from "../routes/product";
import usersRouter from "../routes/user";
import categoryRoute from '../routes/category';
import authRoute from "../routes/auth";
import booksRouter from '../routes/book';

const app = express();
//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

//route
app.use(productsRouter);
app.use(usersRouter);
app.use(categoryRoute);
app.use(authRoute);
app.use(booksRouter)
//connec data
mongoose.connect('mongodb://localhost:27017/we16309')
    .then(() => console.log("Ket noi db thanh cong"))
    .catch((error)=> console.log(error));


//connection
const PORT = 3001;
app.listen(PORT, () =>{
    console.log("Server is running  port", PORT);
})
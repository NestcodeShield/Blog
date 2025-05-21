import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"

const router = express.Router();

dotenv.config(); //ДАННЫЕ ИЗ ENV
const PORT = process.env.PORT;


import UserModel from "./model/UserModel.js";

const app = express()

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() =>
  console.log('Data Base working')).catch (() => console.log('DB not working', err))

app.get('/', (req, res) => {
  res.send('Работает')})

app.post('/data', async (req, res) => {
  console.log('Получено:', req.body);
  res.json({message:"Данные получены!"})
})

app.post('/auth/register', async (req, res) => {
  try {

    //получение данных с фронтенда из JSON
    const {username, email, password} = req.body;


    //Данные передаются в схему монго 
    const newUser = new UserModel({
      username,
      email,
      password
    });
    await newUser.save(); //Сохренение в базу

    res.status(201).json({message: "Пользователь сохранен!"})
  } catch(err) {
    res.status(500).json({errror: "Ошибка сервера!"})
  }
})

app.post('/auth/login', async (req, res) => {

   const {email, password} = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({message: "Пользователь не найден"});
    }

    if (user.password !== password) {
      return res.status(401 ).json({message: "Почта или пароль не совпадают!"});
    }   

      return res.status(200).json({message: "Вход прошел успешно", user });
    } catch (error) {
      console.error(error); 
      return res.status(500).json({message: "Ошибка сервера"},email, password );
    }
  })

app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Сервер работает на http://localhost:5000')
  }
})


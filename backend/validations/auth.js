import {body} from 'express-validator'; 

export const registerValidation = [
    body('email','Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть миннимум 5 символов').isLength({min: 5}),
    body('username', 'Укажите имя').isLength({min: 3}),
  ]

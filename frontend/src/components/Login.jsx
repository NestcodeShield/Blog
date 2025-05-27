import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
    // создаем переменную и функцию для ее изменения
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


    function handleEmailChange(e) {
    setEmail(e.target.value); // сохраняем в name то, что ввел пользователь
    } 
    function handlePasswordChange(e) {
    setPassword(e.target.value); // сохраняем в name   то, что ввел пользователь
    } 

    /*function handleSubmit(e) {
      e.preventDefault();
      console.log('Имя: ',username);
      console.log('Почта: ',email);
      console.log('Пароль: ',password);
    }*/

    function handleSubmit(e) {
       e.preventDefault();
 
      fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      .then((response) => {
        if (response.status === 200) {
          console.log('Успешный вход!');
          alert('Успешный вход!');
          navigate("/editor")
        } else {
          console.log('Ошибка входа!', response.status);
          alert('Ошибка входа!');
        } 

        if (response.status === 401) {
          console.log('Почта или пароль не совпадают!')
        }
        return response.json();
      })
      .then((data) => {
        console.log("Ответ от сервера:", data);
      })
    }


  return (
    <div className="LoginForm">
      <form>
        <label>
          <input type="email" placeholder="Email" onChange={handleEmailChange}></input>
          <input type="password" placeholder="Password" onChange={handlePasswordChange}></input>
          <button onClick={handleSubmit} className="submit">Войти</button>
          <Link className='changeForm' to="/auth/register">Регистрация</Link>
        </label>
      </form>
    </div>
  );
}
export default Login;

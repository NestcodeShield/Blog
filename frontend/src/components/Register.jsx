import './AuthForm.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Register() {

  const navigate = useNavigate();


  const [username, setName] = useState(''); // создаем переменную name и функцию для ее изменения
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


    function handleNameChange(e) {
    setName(e.target.value); // сохраняем в name то, что ввел пользователь
    } 
    function handleEmailChange(e) {
    setEmail(e.target.value); // сохраняем в name то, что ввел пользователь
    } 
    function handlePasswordChange(e) {
    setPassword(e.target.value); // сохраняем в name то, что ввел пользователь
    } 

    /*function handleSubmit(e) {
      e.preventDefault();
      console.log('Имя: ',username);
      console.log('Почта: ',email);
      console.log('Пароль: ',password);
    }*/
    function handleSubmit(e) {
       e.preventDefault();

      fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      })
      .then((response) => {
        if (response.status === 201) {
          console.log("Успешная регистрация!");
          alert('Успешная регистрация!');
          navigate("/editor");
        } else {
          console.log('Ошибка регистрации!', response.status);
          alert('Ошибка регистрации!');
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
          <input type="text" placeholder="Name" onChange={handleNameChange}></input>
          <input type="email" placeholder="Email" onChange={handleEmailChange}></input>
          <input type="password" placeholder="Password" onChange={handlePasswordChange}></input>
          <button onClick={handleSubmit} className="submit">Зарегистрироваться</button>
           <Link className='changeForm' to="/auth/login">Вход</Link>
        </label>
      </form>
    </div>
  );
}
export default Register;

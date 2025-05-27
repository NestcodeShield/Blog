import { useState } from 'react';
import './Editor.css';


function Editor() {

  const [name, setName] = useState('');
  const [preview, setPreview] = useState('');
  const [description, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [tags, setTags] = useState('');

  function handleNameChange (e) { setName(e.target.value) };
  function handlePreviewChange (e) { setPreview(e.target.value) };
  function handleDescChange (e) { setDesc(e.target.value) };
  function handleImageChange (e) { setImage(e.target.value) };
  function handleTagChange (e) {  
  const input = e.target.value;
  const tagArray = input.trim().split(/\s+/); // Разделяет по пробелам
  setTags(tagArray); };

  function handleSubmit (e) {
    e.preventDefault();
   fetch("http://localhost:5000/blog/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          preview,
          description,
          image,
          tag: tags
        })
      }).then((response) => {
        if (response.status === 201) {
          console.log("Успешное создание поста!");
          alert('Успешное создание поста!');
        } else {
          console.log('Ошибка при создании поста!!', response.status);
          alert('Ошибка при создании поста!!');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Ответ от сервера:", data);
      })
  }


  console.log(description)

  return (
    <div className="Editor">
        <h2>Создание поста</h2>
         <form>
            <input type='text' placeholder='Название поста' onChange={handleNameChange}/>
            <textarea placeholder='Краткое описание' onChange={handlePreviewChange}></textarea>
            <textarea placeholder='Содержание' onChange={handleDescChange}/>
            <input type='text' placeholder='Обложка поста' onChange={handleImageChange}/>
            <input type='text' placeholder='Добавьте теги' onChange={handleTagChange}></input>
            <button onClick={handleSubmit}>Создать</button>
         </form>


    </div>
  );
}

export default Editor;

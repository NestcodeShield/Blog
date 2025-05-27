import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import { useParams } from "react-router-dom";
import './PostDetails.css'

dayjs.extend(relativeTime);
dayjs.locale('ru');


function PostDetails() {

  
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
  fetch(`http://localhost:5000/blog/posts/${id}`)   
    .then(res => res.json())
    .then(data => {
      setPost(data);
    })
    .catch((err => 
      console.log('Ошибка загрузки поста!')
    ))
}, [id]);

  if (!post) return <p>Загрузка...</p>;

  return (
    <div className="blog-page">
        <h3>{post.name}</h3>
        <img alt="" src={post.image}></img>
        <p className="createdAt">{dayjs(post.createdAt).fromNow()}</p>
        <p className="description">{post.description}</p>
    </div>
  );
}

export default PostDetails;

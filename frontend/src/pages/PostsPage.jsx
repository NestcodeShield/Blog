import { useEffect, useState } from "react";
import './PostsPage.css'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import { Link } from "react-router-dom";
import AsideMenu from "../components/AsideMenu";

dayjs.extend(relativeTime);
dayjs.locale('ru');


function PostsPage() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/blog/posts")   
    .then(res => res.json())
    .then(data => {
      setPosts(data);
    })
    .catch((err) => {
      console.log('Ошибка загрузки постов!')
    })
}, []);

  return (
    <div className="blog-list">

        {posts.length === 0 ? (
          <p>Загрузка постов</p>
        ) : (
          posts.map(post => (
            <div key={post._id} className="post-block">
              <Link to={`/post/${post._id}`}>
                <p className="createdAt">{dayjs(post.createdAt).fromNow()}</p>
                <h3>{post.name}</h3>
                <p className="preview">{post.preview}</p>
                <img src={post.image} alt=""></img>
                <div className="tag-list">
                  {post.tag.map((tag, index) => (
                    <p key={index} className="tag">{tag}</p>
                  ))}
                </div>
              </Link>
            </div>
          ))
        )}
    </div>
  );
}

export default PostsPage;

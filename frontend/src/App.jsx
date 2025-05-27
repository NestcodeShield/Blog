import { BrowserRouter, Routes, Route, Navigate, redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Auth from './pages/Auth';
import Editor from './pages/Editor';
import PostsPage from './pages/PostsPage';
import PostDetails from './pages/PostDetails';
import AsideMenu from './components/AsideMenu';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <AsideMenu/>
       <Routes>
        <Route path="/" element={<Navigate to="/posts"/>}/>

        <Route path="/auth/*" element={<Auth />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}   

export default App;

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import { Api } from "../../consumoApi/consumoApi"
import './styles.css'

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get("https://api-fake-blog.herokuapp.com/postagens").then((response) => {
        const data = response.data;
        const index = parseInt(id)
        const post = data[index];
        console.log(post);
        setBlog(post);
      });
  }, []);

  return (
    <div>
      <Header />
      <Link className="blog-voltar" to="/">
        Voltar
      </Link>

      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Publicado no dia {blog.postDate}</p>
            <h1>{blog.title}</h1>
          </header>

          <img
            src={`https://api-fake-blog.herokuapp.com${blog.thumbImage}`}
            alt="cover"
          />
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : (
        <h3>Carregando...</h3>
      )}
    </div>
  );
}

export default Blog;

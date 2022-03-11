import React, {useState, useEffect} from "react";
import PostCard from "../components/PostCard";
import Button from '../components/Button';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [selectPost, setSelectPost] = useState(1);

  const createPost = (id) => {
    return {
      "id": id,
      "title": `post${id}`,
      "author": `typicode${id}`,
      "active": false
    }
  }

  const fetchData = (url) => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        data.map(item => {
          if(item.id === 1) 
            item.active = true;
          else 
            item.active = false;
        });
        setPosts(data);
      })
  } 

  useEffect(() => {
    fetchData("http://localhost:3000/posts");
  }, []);

  const selectItem = (id) => {
    let updateArr = [];
    posts.forEach(item => {
      if(item.id === id){
        item.active = true;
        setSelectPost(item.id);
      }else 
        item.active = false;
      
      updateArr = [...updateArr, item];
    });
    setPosts(updateArr);
  }

  const deletePost = (id) => {
    let updateArr = posts.filter(item => {
      return item.active === false;
    });

    setPosts(updateArr);
  }

  const addPost = () => {
    const id = posts[posts.length - 1].id + 1;
    let updateArr = [...posts, createPost(id)];
    setPosts(updateArr);
  }

  return <div>
      <h1>Posts страница.</h1>
        <Button textBtn="Delete" deletePost={deletePost} selectId={selectPost} />
        <Button textBtn="Add" addPost={addPost}/>
      {
        posts.map(item => {
          return (
            <PostCard
              className={item.active ? 'active' : ''} 
              key={item.id} 
              author={item.author} 
              id={item.id} 
              title={item.title}
              selectItem={selectItem}
            />
          )
        })
      }
  </div>;
}
import React, {useState,useEffect, useRef} from "react"
import './App.css';

function App() {
  const [posts, setPosts] = useState([])
  const nameRef = useRef('')
  useEffect(() =>{
    fetch('http://localhost:1000/posts')
    .then(res => res.json())
    .then(data =>setPosts(data))
  },[])
  const handleForm = e =>{
    e.preventDefault()
    const title = nameRef.current.value
    const newTitle = {title: title}
    if(title === ''){
      return
    }
    fetch('http://localhost:1000/posts',{
      method: 'post',
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(newTitle)
    })
    .then(res => res.json())
    .then(data =>{
      const addTitle = data;
      const newTitle = [...posts,addTitle]
      setPosts(newTitle)
    })

    nameRef.current.value = ''

  }
  return (
    <div className="App">
      <h1>Found title {posts.length}</h1>
      <form onSubmit={handleForm}>
        <input type="text" ref={nameRef} placeholder="add title" />
        <button type="submit">Submit</button>
      </form>
      {
        posts.map(post => <p key={post.id}>{post.id} {post.title}</p>)
      }
    </div>
  );
}

export default App;

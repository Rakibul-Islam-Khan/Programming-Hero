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
    
  }
  return (
    <div
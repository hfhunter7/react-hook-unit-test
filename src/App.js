import React from 'react';
import './App.css';
import useFetchPost from './components/useFetchPost';

function App() {
  const [loading, post, error] = useFetchPost(1)
  if(loading){
    return <div>loading...</div>
  }

  if(error){
    return <div>Error { error }</div>
  }

  return (
    <div className="App">
      <h1>{post.title}</h1>
      <h1>{post.body}</h1>
    </div>
  );
}

export default App;

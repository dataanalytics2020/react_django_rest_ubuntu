import React , {useState,useEffect} from 'react'
// import axios from 'axios'



const ApiFetch = () => {
  
  const [posts,setPosts] = useState([])
  const [id,setId] = useState(1)
  const [clicked,setClicked] = useState(false)

  const handkerClicked = () => {
    setClicked(!clicked)
  }

  useEffect( () =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{mehtod:'GET'})
    .then(res => res.json() )
    .then(data => {
      setPosts(data)
    })
  },[clicked])



  return (
    <div>
      <input type='text' value={id} onChange={evt=>setId(evt.target.value)}/>
      <button type='button' onClick={handkerClicked}>Get post</button>
      {posts.id}
      {/* <ul>
        {
            posts.map(post => <li key={post.id}>{post.id} {post.title}</li>)
        }
      </ul> */}

    </div>
  )
}

export default ApiFetch
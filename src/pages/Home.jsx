import { Fragment } from 'react';
import Cards from '../components/Card';
import {useState, useEffect} from 'react'
import Header from '../components/Header';
import reading from '../assets/reading.avif'
import writing from '../assets/writing.avif'


function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')
      .then((res) => res.json())
      .then((data) => {
        setPost(data)
      })
  },[])

  return (
    <div className='bg-zinc-100- w-fit md:w-auto '>
      <Header/>
      <div className='grid max-w-screen-lg gap-3 m-auto md:grid-cols-2 lg:grid-cols-3'>
        {post.map((number)=>(
        <Fragment className=''key={number.id}>
          <Cards id={number.id} title={number.title} body={number.body} image={number.id % 2 ==0 ? reading : writing}  />
        </Fragment>
        ))}
      </div> 
    </div>
  );
}

export default Home;

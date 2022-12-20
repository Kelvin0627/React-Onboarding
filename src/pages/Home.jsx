import { Fragment } from 'react';
import Cards from '../components/Card';
import {useState, useEffect} from 'react'
import Header from '../components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Description from '../components/Description';
import InnerTitle from '../components/CommentTitle';
import Comment from '../components/Comment'
import BottomBorder from '../components/BottomBorder';
import reading from '../assets/reading.avif'
import writing from '../assets/writing.avif'

function Home() {
  const [email, setEmail] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=6')
      .then((res) => res.json())
      .then((data) => {
        setEmail(data)
      })
  },[])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')
      .then((res) => res.json())
      .then((data) => {
        setPost(data)
      })
  },[])

  return (
    <div className='bg-zinc-100'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header/>
            <div className='grid max-w-screen-lg grid-cols-3 gap-3 m-auto'>
              {post.map((number)=>(
              <Fragment className=''key={number}>
                <Cards title={number.title} body={number.body} image={number.id % 2 ==0 ? reading : writing}  />
              </Fragment>
              ))}
            </div>
          </Route>
          <Route path='/inner-page'>
            <Description/>
            <BottomBorder/>
            <InnerTitle number={email.length}/>
            {email.map((number)=>(
              <Fragment className=''key={number}>
              <Comment email={number.email} userComment={number.body}/>
              </Fragment>
            ))}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Home;

import Description from '../components/Description';
import CommentTitle from '../components/CommentTitle';
import Comment from '../components/Comment'
import BottomBorder from '../components/BottomBorder';
import { Fragment } from 'react';
import {useState, useEffect} from 'react';
import  {useParams} from 'react-router-dom';

function Innerpage() {
    const { id } = useParams()

    const [email, setEmail] = useState([]);
   
    
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments?limit=4}`)
        .then((res) => res.json())
        .then((data) => {
          setEmail(data)
        })
    },[])
  
    return (
      <div className='bg-zinc-100- w-fit md:w-auto '>
        <Description/>
        <BottomBorder/>
        <CommentTitle number={email.length} id={id}/>
        {email.map((number)=>(
        <Fragment className=''key={number}>
            <Comment email={number.email} userComment={number.body}/>
        </Fragment>
        ))}   
      </div>
    );
  }
  
  export default Innerpage;
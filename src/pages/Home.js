import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Card from '../components/Card';
import Logo from '../components/Logo';

const Home = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR')
        .then((res)=>setData(res.data.results))
    },[])



    const[submit,setSubmit]=useState("")
    const HandSubmit =(e)=>{
        e.preventDefault()
    }
 
    return (
        <div className='home'>
            <Navigation/>
            <Logo/>
            <div className="form_master">

            <form className='form' onSubmit={e=>HandSubmit(e)}>
            <input type="text" placeholder='Enter the Title' onChange={e=>setSubmit(e.target.value)}/>
            <br/>
            <input type="submit" value="Searching" />
            </form>
            <div className="buttons" >
                <button className='btn1' type="submit">Top <i class="fa-solid fa-up-long"
                onChange={console.log('c´est moi')}
                ></i></button> 
                <button className='btn2' type="submit">Flop <i class="fa-solid fa-down-long"></i></button>
            </div>
            </div>
            <ul>
                {data.filter(films=>films.title.toLowerCase().includes(submit))
              
                // .sort((a,b)=>btn2. - btn1.vote_average)
                .slice(0,12).map(films=>
                <Card key={films.id} films={films}/>
                )}
            </ul>
        </div>
    );
};

export default Home;
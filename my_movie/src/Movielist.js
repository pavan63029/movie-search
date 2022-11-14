import React,{useState,useEffect} from 'react'
import "./App.css"
import Movielist2 from "./Movielist2"
import Records from "./Data.json"




const Movielist = () => {

  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
 const [movies,SetMovies] = useState([]);
  
 
 
 
 
 
 
    const submitHandler = e =>{
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`).then(
      response => response.json()
    ).then(value => {
      setData(value.Search);
    })

  }
 
  return (
    <div>
     
       
          <h1>Search Your Favorite Movie</h1>
          <div className='display '>
          <form onSubmit={submitHandler}>
          
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>&nbsp;
            <input type="submit" value="Search" />
            </form>
            
            <select className='dropdown' name="language" id="language">
  <option value="Language">Language</option>
  <option value="Telugu">Telugu</option>
  <option value="English">English</option>
  <option value="Hindi">Hindi</option>
</select>
<select className='dropdown' name="genre" id="genre">
  <option value="Genre">Genre</option>
  <option value="Action">Action</option>
  <option value="Thriller"> Thriller</option>
  <option value="Comedy">Comedy</option>
</select>
<p>account</p>
</div> 
{search.length >=1?(<center><h4>"Note:-Search like Games ,  Pirates , Avengers,  Harry like this....."</h4></center>):<Movielist2 /> }
       
       <div className="row" >
       {data.map(movie=>
          <div className="col-md-4 column" key={movie.imdbID}>
            <div className="card" style={{"width": "18rem"}}>
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
              <div className="card-body">
                <h4 className="card-title">{movie.Title}</h4>
            </div>
              </div>
            </div>
        
          )}
          
            </div>

         
           

          
    </div>
  )
}

export default Movielist
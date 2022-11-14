import React from 'react'
import Records from "./Data.json"
function Movielist2() {
  return (
    <div className="row" >
{Records.map(Result=>{
  return(<div className="col-md-4 column" key={Result.id}>
    <img className="card" style={{"width": "18rem"}} src={Result.poster} alt="" />
  </div>)
  })}



    </div>
  )
}
 export default Movielist2
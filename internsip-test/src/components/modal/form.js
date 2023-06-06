import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {   useContext } from "react";
import {UserContext} from '../second/second'


export const Form = ({ onSubmit }) => {
  const value = useContext(UserContext);
  const[movie,setMovie]=useState(value);

  const handleValue=()=>{
    
  }
  return (
    <form onSubmit={onSubmit}>
    <div className="form-group">
    <label htmlFor="name">Movie Name</label>
    <input className="form-control" id="movie" value={movie} onClick={handleValue}/>
  </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
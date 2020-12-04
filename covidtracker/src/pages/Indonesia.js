import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../App.css'


const Indonesia = () => {
  const [jumlahKasus, setjumlahKasus] = useState([]);
  const [meninggal, setmeninggal] = useState([]);
  const [sembuh, setsembuh] = useState([]);
  useEffect(() => {
    axios 
     .get("https://indonesia-covid-19.mathdro.id/api")
     .then((response) =>

     { 
        setjumlahKasus(response.data.jumlahKasus);
        setmeninggal(response.data.meninggal);
        setsembuh(response.data.sembuh);
    })  
 }, []);


  return(

    <div>
    <h3>Jumlah kasus di Indonesia</h3>
    <div className = "box">
    <h1 className ="boxConfirmed">Confirmed {jumlahKasus}</h1>
    <h1 className ="boxDeaths">Deaths {meninggal}</h1>
    <h1 className ="boxRecovered">Recovered {sembuh}</h1>
    </div>
    </div>
    
);

};

export default Indonesia;
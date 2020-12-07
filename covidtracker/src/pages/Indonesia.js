import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../App.css'
import NumberFormat from 'react-number-format'

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
    <h3><center>Jumlah kasus di Indonesia</center></h3>
    <div className = "box">
    <h1 className ="boxConfirmed">Positif {jumlahKasus}</h1>
    <h1 className ="boxDeaths">Meninggal {meninggal}</h1>
    <h1 className ="boxRecovered">Sembuh {sembuh}</h1>
    </div>
    </div>
    
);

};

export default Indonesia;
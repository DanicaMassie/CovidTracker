import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../App.css'


const Global = () => {
  const [confirmed, setConfirmed] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [recovered, setRecovered] = useState([]);
  useEffect(() => {
    axios 
     .get("https://covid19.mathdro.id/api")
     .then((response) =>

     { 
    setConfirmed(response.data.confirmed.value);
    setDeaths(response.data.deaths.value);
    setRecovered(response.data.recovered.value);
    })  
 }, []);


  return(

    <div>
    <h3><center>Jumlah kasus di Seluruh Dunia</center></h3>
    <div className = "box">
    <h1 className ="boxConfirmed">Positif {confirmed}</h1>
    <h1 className ="boxDeaths">Meninggal {deaths}</h1>
    <h1 className ="boxRecovered">Sembuh {recovered}</h1>
    </div>
    </div>
    
);

};

export default Global;
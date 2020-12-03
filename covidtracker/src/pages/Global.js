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
    <h3>Jumlah keseluruhan</h3>
    <div className = "box">
    <h1 className ="boxConfirmed">Confirmed {confirmed}</h1>
    <h1 className ="boxDeaths">Deaths {deaths}</h1>
    <h1 className ="boxRecovered">Recovered {recovered}</h1>
    </div>
    </div>
    
);

};

export default Global;
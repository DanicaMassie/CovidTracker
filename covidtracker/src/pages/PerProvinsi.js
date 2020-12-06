import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../App.css'
import NumberFormat from 'react-number-format'

const PerProvinsi = () => {
  const [provinsi, setProvinsi] = useState([]);

  useEffect(() => {
    axios 
     .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
     .then((response) =>

     { 
        setProvinsi(response.data.provinsi);
    })  
 }, []);


  return(

    <div className="container">
    <h3>Jumlah kasus di setiap Provinsi di Indonesia</h3>
    <table border="1">
        <tr>
            <td> Provinsi </td>
            <td> Positif </td>
            <td> Meninggal </td>
            <td> Sembuh </td>
        </tr>
        {provinsi?.map((item) => {
            return(
                <tr>
                    <td>{item.provinsi}</td>
                    <td>
                        <NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'} />
                        </td>
                    <td>
                        <NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'} />
                        </td>
                    <td>
                        <NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'} />
                        </td>
                </tr>
                
            )
        })}    
    </table>
    </div>   
    )
    
}

export default PerProvinsi;
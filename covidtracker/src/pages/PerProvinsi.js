import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format'
import '../App.css'

export default function PerProvsinsi(){
  const [PerProvsinsi, provinsiList] = useState([]);

   
    useEffect(() => {
      axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then(response => {
        provinsiList(response.data.data)
        
      })
      .catch(err => {
        console.log(err)
    })
    }, []);
console.log (PerProvsinsi)
return (
<center>
<h3><center>Jumlah kasus di setiap provinsi yang ada di Indonesia</center></h3>
<table border="1">
                <tr>
                     <td><center> No. </center></td>
                     <td><center> Provinsi </center></td>
                     <td><center> Positif </center></td>
                     <td><center> Meninggal </center></td>
                     <td><center> Sembuh </center></td>
                    
         
                </tr>
                 {PerProvsinsi.map((item, index) => {
                  return(
                      <tr classNames="table">
                          <td key={item.fid}><center>{index + 1}.</center></td>
                        <td><center>{item.provinsi}</center></td>
                          <td className ="tablePositif"><center><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></center></td>
                          <td className ="tableMeninggal"><center><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></center></td>
                          <td className ="tableSembuh"><center><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></center></td>
                         
                       </tr>
                 )
             })}
           </table>
           </center>
)
}
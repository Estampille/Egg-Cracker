import icon from "./icon.svg";
import './App.css';
import React, {  useState } from "react";



function App() {


  const [eggDate, setEggdate] = useState([]);
  

  function GetFormattedDate() {
    

    
   const minDay= new Date();
   minDay.setTime(minDay.getTime() + 19*24 * 3600 * 1000);
    const dayMinDay=minDay.getDate();
    const monthMinDay=minDay.getMonth()+1;

    
    const maxDay= new Date();
   maxDay.setTime(maxDay.getTime() + 28*24 * 3600 * 1000);
    const dayMaxDay=maxDay.getDate();
    const montMaxDay=maxDay.getMonth()+1;

    

    
     setEggdate(`Aujourd'hui, tes oeufs sont extra-frais si la date de péremption est entre le ${dayMinDay}/${monthMinDay} et le ${dayMaxDay}/${montMaxDay} `);
}


  return (
    <div className="App">
      
        <img src={icon} className="App-logo" alt="logo" />
        <button type="button" onClick={GetFormattedDate} className="button">Dates oeufs extra-frais</button>
        <p>{eggDate}</p>
     
    </div>
  );
}

export default App;

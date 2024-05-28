import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import { get, set,remove } from './utilities/utilities';

function App() {
  const [countries, setCountries] = useState([]);
  const [add, setAdd] = useState([]);
 
  
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
      //console.log(countries);
  }, []);

  const handleClickAdd = (country) => {
    const countryObj=country.country;
    const newArray = [...add, countryObj];
    setAdd(newArray);
    
    //console.log(country.country.name.common);
    set(country.country.name.common)
  };
  const handleClickRemove=(country)=>{
    remove(country.name.common);
    const removeArray=add.filter((c)=>country!==c);
    setAdd(removeArray);
  }
  useEffect(()=>{
    if(countries.length){
      const countryFromLs=get();
      console.log(countryFromLs);
      const ar=[];
      for (const country of countries) {
        
        if(countryFromLs.find((name)=>name===country.name.common)){
          ar.push(country);
        }
      }
      setAdd(ar);
      console.log(ar);
    }
    
      
    },[countries]);
  

  // Logging the updated add state whenever it changes
  useEffect(() => {
    console.log('Updated add array:', add);
  }, [add]);

  return (
    <>
      <h1>array length is:{add.length}</h1>
      <ul>
        {add.map((country, idx) => (
          <li style={{ color: "black" }} key={idx}>
            <img src={country.flags.png} alt="" /><button className={`btn-class ${country.name.common==='Bangladesh'&& 'btn-class-brazil'}`} onClick={()=>handleClickRemove(country)}>remove</button>
          </li>
        ))}
      </ul>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "20px" }}>
        {countries.map((country, idx) => (
          <Countries country={country} handleClickAdd={handleClickAdd} key={idx}></Countries>
        ))}
      </div>
    </>
  );
}

export default App;

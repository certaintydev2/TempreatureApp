import React, { useEffect, useState } from 'react'

const Tempapp = () =>{
    const [city,setCity]=useState(null)
    const[search,setSearch]=useState("indore")
    useEffect(()=>{
        const fetchApi = async() =>{
            const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ae86ac009dc0d551e40762cc4325fc5c`
            const response = await fetch(url);
            const resJson = await response.json();
             setCity(resJson.main);
        };
        fetchApi();
    },[search])

    return(
    <>
    <div className='box'>
        <div className='inputData'>
            <input 
            type="search"
            value={search}
            className="inputField"
            onChange={(event)=>{
                 setSearch(event.target.value)
            }}
         />

        </div>
        {!city? (
            <p className='error_msg'>No Data Found</p>
        ) :(
            <div>
            <div className='info'>
            <h2 className='Location'>
            <i class="fa-solid fa-street-view"></i>{search}
            </h2>
            <h1 className='temp'>
                {city.temp} cel
            </h1>
            <h3 className='tempin_max'> Min {city.temp_min} cel | Max  {city.temp.min} cel</h3>

        </div>
        </div>
        )
         }
       
       
        </div>
    </>
    )
}
export default Tempapp;
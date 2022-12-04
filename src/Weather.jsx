import { useState, useEffect } from "react";

const style = {
    width: '5em',
    height: '2em',
    position: 'absolute',
    display: 'flex',
    top: '10px',
    right: '10px'
}

const imgStyle = {
    height:'35px',
    width:'30px'
}

const tempStyle = {
    position: 'absolute',
    left:'6px',
}

const contentStyle = {
    position: 'absolute',
    right:'5px',
    top: '5px',
    fontSize: '17px'
}

const Temp = () =>{

    const[data,setData] = useState();
 
    const getApiData = async() =>{
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=2aa7760d7ef272de5f3a409386e14ac1')
            .then(res => res.json());
        
        setData(response);
    }

    useEffect(()=>{ 
        getApiData();      
    },[])

    return(
        data!=null ?
        <div className="temp-header" style={style}>
            <div style={tempStyle}><img src={"https://openweathermap.org/img/w/"+data.weather[0].icon+".png"} style={imgStyle}></img></div>
            <div style={contentStyle}>{Math.ceil(data.main.temp - 273.15)}&deg;C</div>
        </div>
        :
        <></>
    );

}

export default Temp;
import React, { useEffect, useState } from "react";

const App = () => {

    const [data, setData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((json) => {setData(json.message)           
            setIsLoaded(true)}); 
    }, []);

    if(!isLoaded) return <p>Loading...</p>

    return (
        <img src={data} alt="A Random Dog"></img>
    );



}

export default App;
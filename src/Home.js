import react, { useState } from "react";

const Home = () => {
    const [name, setName] = useState('mirio');
    const [age, setAge] = useState('age')
    const hendelClicK = () => {
        console.log("hello ninja");
        setName('dash');
        setAge ('23')
    }



    return (
        <div className="Home">
            <h2>Home page</h2>
            <p>name :{name}</p>
            <p>age : {age}</p>
            <button onClick={hendelClicK} >Click me</button>
        </div>
    );
}

export default Home;
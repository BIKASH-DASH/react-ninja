const Home = () => {
    const hendelClicK = () => {
        console.log("hello ninja");
    }

    const hendelClickAgain = (name,event) =>{
        console.log('hello '+name,event)
    }

    return (
        <div className="Home">
            <h2>Home page</h2>
            <button onClick={hendelClicK} >Click me</button>
            <button onClick={(e)=>hendelClickAgain("helloBikash",e)}>Click again</button>
        </div>
    );
}

export default Home;
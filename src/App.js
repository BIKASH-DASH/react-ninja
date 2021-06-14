import Navbar from "./Navbar";
import Home from "./Home";
import moduleName from 'react-router-dom'

export default function App() {
  const title = 'welcome to new blog';
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <h1>{title}</h1>
        <Home/>
        {/* <p>likes {likes} times</p>
        <pre>{JSON.stringify(person)}</pre>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google</a> */}
      </div>
    </div>
  );
}


import './App.css';

export default function App() {
  const title = 'welcome to new blog';
  const likes = 50;
  const person = {name: "vikash",age:40}
  const link = "http://google.com"
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>likes {likes} times</p>
        <pre>{JSON.stringify(person)}</pre>
        <p>{Math.random()*10}</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}


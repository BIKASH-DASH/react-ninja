import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create"; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BlogDetails from "./BlogDetails";

export default function App() {
  const title = 'welcome to new blog';
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <h1>{title}</h1>

          <Switch>
            <Route exact path="/" component={Home} >
            </Route>

            <Route exact path="/create" component={Create} >
            </Route>

            <Route exact path="/blogs/:id" component={BlogDetails} >
            </Route>

          </Switch>

        </div>
      </div>
    </Router>
  );
}


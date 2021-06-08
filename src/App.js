import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/Main/Main';
import Blog from './components/Blog/Blog';
import Destination from './components/Destination/Destination';
import Header from './components/Header/Header';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import Booking from './components/Booking/Booking';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path ="/home">
            <Main></Main>
          </Route>
          <Route path = "/news">
            <News></News>
          </Route>
          <Route path ="/destination">
            <Destination></Destination>
          </Route>
          <Route path ="/contact">
            <Contact></Contact>
          </Route>
          <Route path ="/blog">
            <Blog></Blog>
          </Route>
          <Route exact path ="/">
            <Main></Main>
          </Route>
          <Route path = "/login">
            <Login></Login>
          </Route>
          <Route path = "/booking">
            <Booking></Booking>
          </Route>
          <Route path ="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

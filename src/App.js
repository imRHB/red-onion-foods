import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Pages/NavBar/NavBar';
import Footer from './Pages/Footer/Footer';
import Menu from './Pages/Menu/Menu';
import Extras from './Pages/Extras/Extras';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Menu></Menu>
            <Extras></Extras>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

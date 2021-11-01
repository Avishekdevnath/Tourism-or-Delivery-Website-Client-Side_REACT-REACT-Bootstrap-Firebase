import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Services from './Components/Services/Services';
import AuthProvider from './context/AuthProvider';
import SignUp from './Components/Signup/SignUp';
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



// Code for main or app section

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route path="/service/:serviceId">
              <Service></Service>

            </Route>



            <Route exact path="/about">
              <About></About>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Teachers from './components/Teachers/Teachers';
import Footer from './components/Footer/Footer';
import { createContext } from 'react';
export const CrestContext = createContext('Crest');

function App() {
  const ornaments = 'Honoured person';
  return (
    
    <div className="App">
      <CrestContext.Provider value={[ornaments]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <Route path ="/service">
          <Services></Services>
          </Route>
          <Route path="/service/:serviceId">
          <Services></Services>
          </Route>
          <Route path ="/teachers">
            <Teachers></Teachers>
          </Route>
          <Route path ="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </CrestContext.Provider>
    </div>
  );
}

export default App;

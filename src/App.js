import './App.css';
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import Homepage from './pages/Homepage';
import { HomeTemplate } from './templates/hometemplate/HomeTemplate';


const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
    <Switch>
      <HomeTemplate path="/" exact Component={Homepage} />
    </Switch>
  </Router>
  );
}

export default App;

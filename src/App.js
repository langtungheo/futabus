import './App.css';
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import Homepage from './pages/Homepage';
import { HomeTemplate } from './templates/hometemplate/HomeTemplate';
import Schedule from './pages/Schedule';
import Buytickets from './pages/Buytickets';
import ModalHOCComponent from './HOC/modal/ModalHOCComponent';


const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <ModalHOCComponent />
      <Switch>
        <HomeTemplate path="/lich-trinh" exact Component={Schedule} />
        <HomeTemplate path="/mua-ve" exact Component={Buytickets} />
        <HomeTemplate path="/mua-ve/:id" exact Component={Buytickets} />
        <HomeTemplate path="/" exact Component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;

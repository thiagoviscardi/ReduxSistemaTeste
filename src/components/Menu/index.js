import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { MenuLinks } from "./style.js";
import List from "../List/index.js";
import Add from "../Add";
import Edit from "../Edit";

function Menu() {
  return (
    <Router>
      <MenuLinks>
        <Link to="/home">Home</Link>
        <Link to="/add">Adicionar</Link>
      </MenuLinks>
      <Switch>
        <Route exact path="/home" component={List} />
        <Route exact path="/list" component={List} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/edit" component={Edit}/>
      </Switch>
    </Router>
  );
}

export default Menu;

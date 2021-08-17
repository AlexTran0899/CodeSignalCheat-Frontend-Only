import './App.css';
import Homepage from "./components/Homepage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>

  );
}

export default App;

import { BrowserRouter, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.scss";

import MainComponent from "./Components/MainComponent";
import { configureStore } from "./redux/configureStore";
const store =configureStore();
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <div className="navigationHeader">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/temp1">Temp1</NavLink>
          <NavLink to="/temp2">Temp2</NavLink>
          <NavLink to="/text">Text</NavLink>
        </div>
        <MainComponent />
      </BrowserRouter>

      <div className="container">
        <div className="row">
          <div className="col-4">Hii Yash</div>
          <div className="col-6">Badsiwal</div>
        </div>
      </div>
      </Provider>
    </div>
  );
}

export default App;

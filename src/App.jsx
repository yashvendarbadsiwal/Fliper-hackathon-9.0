import { BrowserRouter, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.scss";

import MainComponent from "./Components/MainComponent";
import { configureStore } from "./redux/configureStore";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const store = configureStore();
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <MainComponent />
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

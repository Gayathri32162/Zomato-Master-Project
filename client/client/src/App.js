//HOC
import HomeLayoutHOC from "./HOC/Home.HOC.js"; 
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC.jsx";

//import css wdiles from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Redirect,Route } from "react-router";

//Pages
import Home from "./pages/home.jsx";

import Temp from "./Components/temp"

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Redirect to="/delivery"/>
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home}/>
      <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp}/>
    </div>
  );
};

export default App;

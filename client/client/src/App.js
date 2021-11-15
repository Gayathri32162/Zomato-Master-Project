//HOC
import HomeLayoutHOC from "./HOC/Home.HOC.js"; 
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC.jsx";

//import css wdiles from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Redirect,Route } from "react-router";

//Pages
import Home from "./pages/home.jsx";

import Temp from "./Components/temp";
import Overview from "./pages/Overview.jsx";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Redirect to="/delivery"/>
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home}/>
      <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp}/>
      <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={Overview}/>
      <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={Temp}/>
      <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Temp}/>
      <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Temp}/>
      <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Temp}/>
    </div>
  );
};

export default App;

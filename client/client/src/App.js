//HOC
import HomeLayoutHOC from "./HOC/Home.HOC.js"; 


//import css wdiles from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Components
import Temp from "./Components/temp.js";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/:type" exact component={Temp}/>
    </>
  );
};

export default App;

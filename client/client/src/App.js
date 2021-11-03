//HOC
import HomeLayoutHOC from "./HOC/Home.HOC.js"; 

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

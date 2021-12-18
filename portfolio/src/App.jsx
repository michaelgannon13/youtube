import Intro from "./components/intro/Intro";
import About from './components/about/About';
import { ProductList } from "./components/ProductList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  // conditional css based on state
  return <div style={{
            background: darkMode ? "#222":"white", 
            color: darkMode && "white",
          }}>
            <Toggle /> 
            <Intro />
            <About />
            <ProductList />
        </div>;
};

export default App;
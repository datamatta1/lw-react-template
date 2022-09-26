import { render } from "react-dom";
import HelloWorld from "./components/HelloWorld";

const App = () => {
  return <HelloWorld helloWorld="Hello World LightWeight App" />;
};

render(<App />, document.getElementById("root"));

import "./App.css";
import { Content } from "./Components/Header/Content/Content";
import NavBar from "./Components/NavBar/NavBar";
import SignUP from "./Components/Pages/SignUp/SignUP";

function App() {
  return (
    <div className="App font-Poppins">
      <NavBar></NavBar>
      <SignUP></SignUP>
      <Content></Content>
    </div>
  );
}

export default App;

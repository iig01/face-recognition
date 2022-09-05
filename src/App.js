import "./App.css";
import Navigation from "./Components/Navigation";
import Logo from "./Components/Logo";
import ImageLinkForm from "./Components/ImageLinkForm";
import Rank from "./Components/Rank";
import Particle from "./Components/Particle/Particle";

function App() {
  return (
    <div className="App">
      <Particle />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;

import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Services from "./Components/Services/Services";
import Work from "./Components/Work/Work";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Navbar />
        <Header />
        <Slider />
        <Services />
        <Work />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Jobs jobStyle="jobStyle" />
      <Footer />
    </>
  );
}

export default App;

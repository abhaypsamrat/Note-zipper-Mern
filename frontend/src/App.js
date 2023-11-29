import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ minHeight: "93vh" }}></main>
      <Footer />
    </div>
  );
}

export default App;

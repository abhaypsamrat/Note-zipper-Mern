import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screen/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyNotes from "./screen/MyNotes/MyNotes";
import LoginScreeen from "./screen/LoginScreen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen/RegisterScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginScreeen/>}/>
          <Route path="/register" element={<RegisterScreen/>} exact />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

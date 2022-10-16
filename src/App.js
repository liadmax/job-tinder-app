
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { GlobalStyle } from "./globalStyles";
import './App.css'
import Simple from "./Components/Cards";
import Logo from "./Components/Logo";

function App() {
  return (
    <>
    <Logo />
    <Simple />
    <GlobalStyle />
    <Header />
    <Footer />
    </>
  );
}

export default App;

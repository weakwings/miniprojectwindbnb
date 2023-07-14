import Navbar from "./components/Navbar";
import Cards from "./components/CardsContainer";
import Footer from "./components/Footer";
import Stays from "./components/Stays";

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Stays />
      </header>
      <main>
        <Cards />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
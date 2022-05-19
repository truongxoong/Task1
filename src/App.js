// import logo from "./logo.svg";
// import "./App.css";
import Cards from "./component/cards/Cards";
import Header from "./component/header/header";
import Navigation from "./component/navigation/Navi";
import Ticket from "./component/ticket/Ticket";
import Trends from "./component/trends/Trends";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Cards />
      <Trends />
      <Ticket />
    </div>
  );
}

export default App;

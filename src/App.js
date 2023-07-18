import Container from "react-bootstrap/Container";
import "./App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <Container className="App">
      <Header />
      <CardContainer />
    </Container>
  );
}

export default App;

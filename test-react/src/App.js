import styled from "styled-components";
import Counter from "./components/Counter";

const Container = styled.div`
  max-width: 800px;
  background-color: #e9b4cf;
  color: #fff;
  margin: 0 auto;
  border-radius: 10px;
  padding: 15px;
`;

function App() {
  return (
    <Container>
      <Counter></Counter>
      <Counter></Counter>
    </Container>
  );
}

export default App;

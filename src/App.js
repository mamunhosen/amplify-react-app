import styled from "styled-components/macro";

import Quote from "./Quote";

const Wrapper = styled.div`
  max-width: 500px;
  margin: auto;
`;

function App() {
  return (
    <Wrapper>
      <Quote
        by="Bill Gates (Allegedly)"
        source="https://quoteinvestigator.com/2011/09/08/640k-enough/"
      >
        640kb of memory ought to be enough for anyone
      </Quote>
    </Wrapper>
  );
}

export default App;

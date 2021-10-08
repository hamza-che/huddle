import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { Container } from "./components/styled/Container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styled/GlobalStyles";
import content from "./content";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfeff",
    body: "#fff",
    footer: "hsl(192, 100%, 9%)",
  },
  media: {
    mobile: "768px",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <Container className="cardsContainer">
          {content.map(item => {
            return <Card key={item.id} item={item} />;
          })}
        </Container>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;

import { createGlobalStyle } from "styled-components";
import { Player } from "./components/player/Player";
import { Container, GitHubLink, GitHubLinkWrapper, Title } from "./App.styles";
import Link from "next/link";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pixelify Sans";
    src: url("/videoplayer-example/static/PixelifySans-Regular.ttf");
    font-weight: 400;
  }

  * {
    font-family: 'Pixelify Sans';
    font-weight: 400;
  }

  body, html {
    padding: 0;
    margin: 50px;
  }
`;

function App() {
  return (
    <Container>
      <Head>
        <title>Crescendo Learning</title>
        <link rel="icon" href="/title.png" />
      </Head>
      <GlobalStyle />
      <Link href="/">Home</Link>
      <Title>Solar System 101</Title>
      <Player src="https://www.youtube.com/watch?v=libKVRa01L8&t=41s" />
      <GitHubLinkWrapper>
        See code on {" "}
        <GitHubLink href="https://github.com">
          GitHub Repo
        </GitHubLink>
      </GitHubLinkWrapper>
    </Container>
  );
}

export default App;

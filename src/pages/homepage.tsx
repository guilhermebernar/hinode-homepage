import Content from "../components/content/Content";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Main } from "../styles/main";

const HomePage = () => {
  return (
    <>
      <Main>
        <Header />
        <Content />
        <Footer />
      </Main>
    </>
  );
};

export default HomePage;

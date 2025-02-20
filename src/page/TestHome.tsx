import styled from "../style/HomeT.module.scss";
import { Header, Footer, Contents } from "../components";

const Home = () => {
  return (
    <div className={styled.container}>
      <Header />
      <Contents />
      <Footer />
    </div>
  );
};

export default Home;

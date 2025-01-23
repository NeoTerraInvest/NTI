import styled from './Home.module.scss';
// import { kor, eng } from '../assets/language';
import { Header, Footer, Contents } from '../components';

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

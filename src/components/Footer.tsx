import styled from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer id={styled.footer}>
      <div id={styled.logo}>
        <span id={styled.main}>NTI</span>
        <span>NEO TERRA INVEST</span>
      </div>
      <div id={`${styled.footerContents}`}>
        <span>© 2012 Neo Terra Invest</span>
        <div id={`${styled.footerGroup}`}>
          <span>Contact</span>
          <span>About Us</span>
          <span>investment in the Future</span>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;

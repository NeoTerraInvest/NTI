import styled from "../style/header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { eng, kor } from "../store";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentLanguage = useSelector(
    (state: RootState) => state.language.language
  );

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    if (selectedLanguage === "eng") {
      dispatch(eng());
      console.log("eng");
    } else {
      dispatch(kor());
      console.log("kor");
    }
  };

  return (
    <div>
      {/* <button onClick={handleClick}>Click</button>
      <p>{message}</p> */}
      <header id={styled.header}>
        <div id={styled.logo}>
          <span id={styled.main}>NTI</span>
          <span>NEO TERRA INVEST</span>
        </div>
        <div id={styled.menu}>
          <button id={styled.language}>
            <select
              name="language"
              id="language-select"
              onChange={handleLanguageChange}
              value={currentLanguage}
            >
              <option value="eng">ENG</option>
              <option value="kor">KOR</option>
            </select>
          </button>
        </div>
      </header>
      <div id={styled.banner}>
        <div id={styled.bannerImage} />
      </div>
    </div>
  );
};

export default Header;

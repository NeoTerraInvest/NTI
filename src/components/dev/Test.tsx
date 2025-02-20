import styled from "../../style/app.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import Board from "./Board";
import { eng, kor } from "../../store";

const Test = () => {
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
    <div className={styled.debug}>
      <span id={styled.test}>test</span>
      <div id={styled.menu}>
        <button id={styled.language}>
          language
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
      <div>
        <Board />
      </div>
    </div>
  );
};

export default Test;

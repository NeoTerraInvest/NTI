import { useSelector } from "react-redux";
import { RootState } from "../../store";
import languageData from "../../assets/language.json";
import { LanguageData } from "../../assets/language";

const Board = () => {
  const kor: LanguageData["kor"] = languageData.kor;
  const eng: LanguageData["eng"] = languageData.eng;
  const supportLanguage = useSelector(
    (state: RootState) => state.language.language
  );

  return <div>{supportLanguage === "kor" ? kor.start : eng.start}</div>;
};

export default Board;

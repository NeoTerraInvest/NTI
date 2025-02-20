import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { eng, kor } from "../../assets";

const Board = () => {
  const supportLanguage = useSelector(
    (state: RootState) => state.language.language
  );

  return <div>{supportLanguage === "kor" ? kor.start : eng.start}</div>;
};

export default Board;

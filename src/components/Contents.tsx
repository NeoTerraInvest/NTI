import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import languageData from "../assets/language.json";
import { LanguageData } from "../assets/language";
import styled from "../style/contents.module.scss";

const Contents = () => {
  const kor: LanguageData["kor"] = languageData.kor;
  const eng: LanguageData["eng"] = languageData.eng;

  const supportLanguage = useSelector(
    (state: RootState) => state.language.language
  );
  // const [isLanguage, setLanguage] = useState<Record<string, string>>({});

  const [isActive, setActive] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null); // reference Components

  const handleActive = (type: string) => {
    setActive(type);
    console.log(type);
  };

  useEffect(() => {
    // scss effect area
    setActive("");
    const handleClickOutside = (e: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target as Node)
      ) {
        setActive(" ");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id={styled.contents}>
      <div id={styled.about}>
        <span id={styled.aboutTitle}>About Us</span>
        <hr />
        <div id={styled.aboutDetail}>
          <div id={styled.aboutus}>
            <span>{supportLanguage === "kor" ? kor.about : eng.about}</span>
            <hr />
            <div id={styled.details} ref={contentRef}>
              <div id={styled.content}>
                <div
                  className={styled.title}
                  onClick={() => {
                    handleActive("start");
                  }}
                >
                  Neo Terra, the Beginning of a New World
                </div>
                {isActive === "start" && (
                  <div
                    className={styled.description}
                    onClick={() => {
                      handleActive("");
                    }}
                  >
                    {supportLanguage === "kor" ? kor.start : eng.start}
                  </div>
                )}
              </div>
              <div id={styled.content}>
                <div
                  className={styled.title}
                  onClick={() => {
                    handleActive("newInvest");
                  }}
                >
                  New Investments, Sustainable Growth
                </div>
                {isActive === "newInvest" && (
                  <div
                    className={styled.description}
                    onClick={() => {
                      handleActive("");
                    }}
                  >
                    {supportLanguage === "kor" ? kor.newInvest : eng.newInvest}
                  </div>
                )}
              </div>
              <div id={styled.content}>
                <div
                  className={styled.title}
                  onClick={() => {
                    handleActive("newglobal");
                  }}
                >
                  Leading the Way in Innovation and Challenge
                </div>
                {isActive === "newglobal" && (
                  <>
                    <div
                      className={styled.description}
                      onClick={() => {
                        handleActive("");
                      }}
                    >
                      {supportLanguage === "kor"
                        ? kor.newglobal
                        : eng.newglobal}
                    </div>
                    <div
                      className={styled.description}
                      onClick={() => {
                        handleActive("");
                      }}
                    >
                      {supportLanguage === "kor"
                        ? kor.adventure
                        : eng.adventure}
                    </div>
                  </>
                )}
              </div>
              <div id={styled.content}>
                <div
                  className={styled.title}
                  onClick={() => {
                    handleActive("value");
                  }}
                >
                  NTI, Creating New Value
                </div>
                {isActive === "value" && (
                  <>
                    <div
                      className={styled.description}
                      onClick={() => {
                        handleActive("");
                      }}
                    >
                      {supportLanguage === "kor" ? kor.trust : eng.trust}
                    </div>
                    <div
                      className={styled.description}
                      onClick={() => {
                        handleActive("");
                      }}
                    >
                      {supportLanguage === "kor" ? kor.value : eng.value}
                    </div>
                  </>
                )}
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div id={styled.invest}>
        <div className={styled.investTitle}>
          <span>Investment</span>
          <span>in the Future</span>
        </div>
        <hr />

        <div id={styled.investContents}>
          <div className={styled.aiContents}>
            <div id={styled.aiImage}>
              <span>Artificial Intelligence</span>
            </div>
            <span>Ai</span>
          </div>
          <div className={styled.quantumContents}>
            <div id={styled.quantumImage}>
              <span>Quantum Computing</span>
            </div>
            <span>Quantum</span>
          </div>
          <div className={styled.DeFIContents}>
            <div id={styled.DeFImage}>
              <span>Decentralized Finance</span>
            </div>
            <span>RWA</span>
          </div>
          <div className={styled.web3Contents}>
            <div id={styled.web3Image}>
              <span>Web 3.0</span>
            </div>
            <span>Web3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;

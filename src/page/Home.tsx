import styled from "./Home.module.scss";
import { kor, eng } from "../assets/language";
import { useEffect, useRef, useState } from "react";
import HydrationChck from "../utils/HydrationCheck";
const Home = () => {
  const [isLanguage, setLanguage] = useState<string>("Eng");
  const [isActive, setActive] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null); // 컴포넌트 참조

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const hanldeActive = (type: string) => {
    setActive(type);
    console.log(type);
  };

  useEffect(() => {
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
    <HydrationChck>
      <div className={styled.container}>
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
                value={isLanguage}
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
        <div id={styled.contents}>
          <div id={styled.about}>
            <span id={styled.aboutTitle}>About Us</span>
            <hr />
            <div id={styled.aboutDetail}>
              <div id={styled.aboutus}>
                <span>{isLanguage === "kor" ? kor.about : eng.about}</span>
                <hr />
                <div id={styled.details} ref={contentRef}>
                  <div id={styled.content}>
                    <div
                      className={styled.title}
                      onClick={() => {
                        hanldeActive("start");
                      }}
                    >
                      Neo Terra, the Beginning of a New World
                    </div>
                    {isActive === "start" && (
                      <div
                        className={styled.description}
                        onClick={() => {
                          hanldeActive("");
                        }}
                      >
                        {isLanguage === "kor" ? kor.start : eng.start}
                      </div>
                    )}
                  </div>
                  <div id={styled.content}>
                    <div
                      className={styled.title}
                      onClick={() => {
                        hanldeActive("newInvest");
                      }}
                    >
                      New Investments, Sustainable Growth
                    </div>
                    {isActive === "newInvest" && (
                      <div
                        className={styled.description}
                        onClick={() => {
                          hanldeActive("");
                        }}
                      >
                        {isLanguage === "kor" ? kor.newInvest : eng.newInvest}
                      </div>
                    )}
                  </div>
                  <div id={styled.content}>
                    <div
                      className={styled.title}
                      onClick={() => {
                        hanldeActive("newglobal");
                      }}
                    >
                      Leading the Way in Innovation and Challenge
                    </div>
                    {isActive === "newglobal" && (
                      <>
                        <div
                          className={styled.description}
                          onClick={() => {
                            hanldeActive("");
                          }}
                        >
                          {isLanguage === "kor" ? kor.newglobal : eng.newglobal}
                        </div>
                        <div
                          className={styled.description}
                          onClick={() => {
                            hanldeActive("");
                          }}
                        >
                          {isLanguage === "kor" ? kor.adventure : eng.adventure}
                        </div>
                      </>
                    )}
                  </div>
                  <div id={styled.content}>
                    <div
                      className={styled.title}
                      onClick={() => {
                        hanldeActive("value");
                      }}
                    >
                      NTI, Creating New Value
                    </div>
                    {isActive === "value" && (
                      <>
                        <div
                          className={styled.description}
                          onClick={() => {
                            hanldeActive("");
                          }}
                        >
                          {isLanguage === "kor" ? kor.trust : eng.trust}
                        </div>
                        <div
                          className={styled.description}
                          onClick={() => {
                            hanldeActive("");
                          }}
                        >
                          {isLanguage === "kor" ? kor.value : eng.value}
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
        <footer id={styled.footer}>
          <div id={styled.logo}>
            <span id={styled.main}>NTI</span>
            <span>NEO TERRA INVEST</span>
          </div>
          <div id={styled.footerContents}>
            <span>© 2012 Neo Terra Invest</span>
            <div id={styled.footerGroup}>
              <span>Contact</span>
              <span>About Us</span>
              <span>investment in the Future</span>
            </div>
          </div>
          <div></div>
        </footer>
      </div>
    </HydrationChck>
  );
};

export default Home;

import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { kor, eng } from '../assets/language';
import styled from '../styles/contents.module.scss';
import init, { language_manager } from 'wasm-lib';

const Contents = () => {
  const supportLanguage = useSelector(
    (state: RootState) => state.language.language,
  );
  const [isLanguage, setLanguage] = useState<Record<string, string>>({});

  const [isActive, setActive] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null); // reference Components

  const hanldeActive = (type: string) => {
    setActive(type);
    console.log(type);
  };

  const fetchLanguage = async () => {
    try {
      await init('/wasm_lib_bg.wasm');
      const manager = language_manager(supportLanguage);
      const parsedData = JSON.parse(manager);
      setLanguage(parsedData);
    } catch (error) {
      console.error('Error loading language data:', error);
    }
  };

  useEffect(() => {
    fetchLanguage();
    // scss effect area
    setActive('');
    const handleClickOutside = (e: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target as Node)
      ) {
        setActive(' ');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [supportLanguage]);

  return (
    <div id={styled.contents}>
      <div id={styled.about}>
        <span id={styled.aboutTitle}>About Us</span>
        <hr />
        <div id={styled.aboutDetail}>
          <div id={styled.aboutus}>
            <span>{isLanguage.about}</span>
            <hr />
            <div id={styled.details} ref={contentRef}>
              <div id={styled.content}>
                <div
                  className={styled.title}
                  onClick={() => {
                    hanldeActive('start');
                  }}
                >
                  Neo Terra, the Beginning of a New World
                </div>
                {isActive === 'start' && (
                  <div
                    className={styled.description}
                    onClick={() => {
                      hanldeActive('');
                    }}
                  >
                    {supportLanguage === 'kor' ? kor.start : eng.start}
                  </div>
                )}
              </div>
              <div id={styled.content}>
                <div
                  className={styled.title}
                  onClick={() => {
                    hanldeActive('newInvest');
                  }}
                >
                  New Investments, Sustainable Growth
                </div>
                {isActive === 'newInvest' && (
                  <div
                    className={styled.description}
                    onClick={() => {
                      hanldeActive('');
                    }}
                  >
                    {supportLanguage === 'kor' ? kor.newInvest : eng.newInvest}
                  </div>
                )}
              </div>
              <div id={styled.content}>
                <div
                  className={styled.title}
                  onClick={() => {
                    hanldeActive('newglobal');
                  }}
                >
                  Leading the Way in Innovation and Challenge
                </div>
                {isActive === 'newglobal' && (
                  <>
                    <div
                      className={styled.description}
                      onClick={() => {
                        hanldeActive('');
                      }}
                    >
                      {supportLanguage === 'kor'
                        ? kor.newglobal
                        : eng.newglobal}
                    </div>
                    <div
                      className={styled.description}
                      onClick={() => {
                        hanldeActive('');
                      }}
                    >
                      {supportLanguage === 'kor'
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
                    hanldeActive('value');
                  }}
                >
                  NTI, Creating New Value
                </div>
                {isActive === 'value' && (
                  <>
                    <div
                      className={styled.description}
                      onClick={() => {
                        hanldeActive('');
                      }}
                    >
                      {supportLanguage === 'kor' ? kor.trust : eng.trust}
                    </div>
                    <div
                      className={styled.description}
                      onClick={() => {
                        hanldeActive('');
                      }}
                    >
                      {supportLanguage === 'kor' ? kor.value : eng.value}
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

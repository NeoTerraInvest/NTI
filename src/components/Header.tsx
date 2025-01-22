import { useState } from 'react';
import styled from '../styles/header.module.scss';

const header = () => {
  const [isLanguage, setLanguage] = useState<string>('Eng');

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
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
    </div>
  );
};

export default header;

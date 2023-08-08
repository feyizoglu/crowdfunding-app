import Image from "next/image";
import { useState } from "react";

const LanguagePicker = ({ handleLocaleChange, selectedLang }) => {
  const [showChoices, setShowChoices] = useState(false);

  const toggleChoices = () => {
    setShowChoices(prev => !prev);
  };

  const hideChoices = () => {
    setShowChoices(false);
  };

  const handleLocaleButtonClick = (lang) => {
    handleLocaleChange(lang);
    hideChoices();
  };

  return (
    <div
      className="fixed z-50 top-5 right-6 md:top-6 xl:right-16"
      onMouseEnter={toggleChoices}
      onMouseLeave={hideChoices}
    >
      <button
        className=" cursor-pointer pb-2"
        onClick={toggleChoices}
      >
        <Image
          src={selectedLang === "en" ? "/uk.svg" : "/tr.svg"}
          alt={selectedLang === "en" ? "English" : "Turkish"}
          width={20}
          height={15}
        />
      </button>
      {showChoices && (
        <div className="flex flex-col">
          {selectedLang === 'tr' && (
            <button
              className=" cursor-pointer"
              onClick={() => handleLocaleButtonClick("en")}
            >
              <Image src="/uk.svg" alt="English" width={20} height={15} />
            </button>
          )}
          {selectedLang === 'en' && (
            <button
              className=" cursor-pointer"
              onClick={() => handleLocaleButtonClick("tr")}
            >
              <Image src="/tr.svg" alt="Turkish" width={20} height={15} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LanguagePicker;

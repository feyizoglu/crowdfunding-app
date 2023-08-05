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
      className="fixed z-50 top-6 right-0 md:-right-2 lg:-right-1 xl:right-8"
      onMouseEnter={toggleChoices}
      onMouseLeave={hideChoices}
    >
      <button
        className="inline-flex text-xl appearance-none outline-none cursor-pointer bg-transparent pl-2 pr-6 md:text-2xl"
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
        <div className="flex flex-col space-y-6">
          {selectedLang === 'tr' && (
            <button
              className="inline-flex text-xl appearance-none outline-none cursor-pointer bg-transparent pl-2 pr-6 md:text-2xl"
              onClick={() => handleLocaleButtonClick("en")}
            >
              <Image src="/uk.svg" alt="English" width={20} height={15} />
            </button>
          )}
          {selectedLang === 'en' && (
            <button
              className="inline-flex text-xl appearance-none outline-none cursor-pointer bg-transparent pl-2 pr-6 md:text-2xl"
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

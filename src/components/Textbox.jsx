import React from 'react'
import SelectDropdown from './SelectDropdown'

function Textbox({
  styleType,
  selectedLanguage,
  setShowModal,
  setTextToTranslate,
  textToTranslate,
  translatedText,
  setTranslatedText,
}) {
  const handleClick = () => {
    setTranslatedText('')
    setTextToTranslate('')
  }

  return (
    <div className={styleType}>
      <SelectDropdown
        selectedLanguage={selectedLanguage}
        setShowModal={setShowModal}
        styleType={styleType}
      />
      <textarea
        placeholder={styleType === 'input' ? 'Enter Text' : 'Translation'}
        disabled={styleType === 'output'}
        onChange={(e) => setTextToTranslate(e.target.value)}
        value={styleType === 'input' ? textToTranslate : translatedText}
      />
      {styleType === 'input' && (
        <div className="delete" onClick={handleClick}>
          X
        </div>
      )}
    </div>
  )
}

export default Textbox

import React from "react"

function SelectDropdown({selectedLanguage, styleType, setShowModal}) {
  return (
    <div className="select-drop-down" onClick={() => setShowModal(styleType)}>
        <input value={selectedLanguage}/>
        <div className="down-arrow">
            <svg
               focusable="false"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 25"
            >
            <path d="M7 10l5 5 5-5z"></path>
            </svg>
        </div>
    </div>
  )
}

export default SelectDropdown
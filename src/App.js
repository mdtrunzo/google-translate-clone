import React from 'react'
import { useState, useEffect } from 'react'
import Textbox from './components/Textbox'
import Arrows from './components/Arrows'
import Modal from './components/Modal'
import axios from 'axios'
import Button from './components/Button'

function App() {
  const [inputLanguage, setInputLanguage] = useState('Spanish')
  const [outputLanguage, setOutputLanguage] = useState('English')
  const [showModal, setShowModal] = useState(null)
  const [languages, setLanguages] = useState(null)
  const [textToTranslate, setTextToTranslate] = useState('')
  const [translatedText, setTranslatedText] = useState('')

  const getLanguages = async () => {
    const response = await axios('http://localhost:8000/languages')
    setLanguages(response.data)
  }

  const handleClick = () => {
    setInputLanguage(outputLanguage)
    setOutputLanguage(inputLanguage)
  }

  const translate = async () => {
    const data = {
      textToTranslate,
      outputLanguage,
      inputLanguage,
    }
    const response = await axios('http://localhost:8000/translation', {
      params: data,
    })
    setTranslatedText(response.data)
  }

  useEffect(() => {
    getLanguages()
  }, [])

  return (
    <div className="app">
      {!showModal && (
        <>
          <Textbox
            styleType="input"
            selectedLanguage={inputLanguage}
            setShowModal={setShowModal}
            textToTranslate={textToTranslate}
            setTextToTranslate={setTextToTranslate}
            setTranslatedText={setTranslatedText}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>
          <Textbox
            styleType="output"
            selectedLanguage={outputLanguage}
            setShowModal={setShowModal}
            translatedText={translatedText}
          />

          <div className="button-container" onClick={translate}>
            <Button />
          </div>
        </>
      )}

      {showModal && (
        <Modal
          setShowModal={setShowModal}
          languages={languages}
          chosenLanguage={
            showModal === 'input' ? inputLanguage : outputLanguage
          }
          setChosenLanguage={
            showModal === 'input' ? setInputLanguage : setOutputLanguage
          }
        />
      )}
    </div>
  )
}

export default App

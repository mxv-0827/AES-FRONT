import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { Slider_Stylizied } from './Slider.Styles'
import ArrowButton from '../../utils/ArrowButton/ArrowButton'

//Importo los iconos, el slider estilizado (Slider_Stylizied) y el boton reutilizable que representa las flechas (ArrowButton)
//Las dos funciones se encargan de sumar o restar el id del objeto de la imagen para mostrar ese en pantalla
//el estado local (idImage) representa el id de cada imagen
//ArrowButton recibe dos parametros que se ejecutan en su respectivo archivo donde se crea

export default function Slider({ data }) {
  const [idImage, setIdImage] = useState(0)

  const handleNext = () => {
    setIdImage((prevId) => (prevId === data.length - 1 ? 0 : prevId + 1))
  }

  const handlePrevious = () => {
    setIdImage((prevId) => (prevId === 0 ? data.length - 1 : prevId - 1))
  }

  return (
    <Slider_Stylizied image={data[idImage].image}>
      <ArrowButton
        arrow={<FaArrowLeft />}
        handleImage={handlePrevious}
      ></ArrowButton>
      <p>{data[idImage].text}</p>
      <ArrowButton
        arrow={<FaArrowRight />}
        handleImage={handleNext}
      ></ArrowButton>
    </Slider_Stylizied>
  )
}

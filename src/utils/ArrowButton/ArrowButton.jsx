import React from 'react'

import { ArrowButton_Stylizied } from './ArrowButton.Styles'

//Boton estilizado que se muestra por pantalla.
//Recibe dos parametros: Arrow (el icono de la flecha) y handleImage(funcion que determina si muestra la imagen siguiente o la anterior)
//Las props ya estan desestructuradas

export default function ArrowButton({ arrow, handleImage }) {
  return (
    <ArrowButton_Stylizied onClick={handleImage}>{arrow}</ArrowButton_Stylizied>
  )
}

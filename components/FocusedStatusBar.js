import React from 'react'
import { StatusBar } from 'react-native'
import { useIsFocused } from "@react-navigation/core";

const FocusedStatusBar = ( props ) => { // Las props fueron el background que se le dio en el Home.js

  const isFocused = useIsFocused(); // Devuelve un true si la pantalla esta en foco, false si no lo esta
  
  return isFocused ? <StatusBar animated={true} {...props} /> : null; // Si la pantalla esta en foco, devuelve el componente StatusBar, si no, devuelve null
}                                                                     // El componente StatusBar tiene una propiedad animated que es true por defecto, pero si no se le pasa ninguna propiedad, no se anima
                                                                      // StatusBar es el componente para controlar la barra de estado de la aplicación. 
                                                                      //La barra de estado es la zona, generalmente en la parte superior de la pantalla, 
                                                                      // que muestra la hora actual, la información de la red Wi-Fi y celular, el nivel de la batería y/u otros íconos de estado.

export default FocusedStatusBar
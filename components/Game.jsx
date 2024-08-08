import React from 'react'
import { View, Button, Text } from 'react-native'
import style from '../style'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from 'react'
import GuessButton from './GuessButton'

const Game = ({navigation}) => {

  const isFocused = useIsFocused();
  
  const [status, setStatus] = useState("")
  const [baseNumber, setBaseNumber] = useState(null)
  const [secretNumber, setSecretNumber] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setBaseNumber(Math.floor(Math.random() * (100)))
      setSecretNumber(Math.floor(Math.random() * (100)))
      setIsLoading(false)
    }, 1000);
    }, [isFocused])

  useEffect(() => {
    if(secretNumber > baseNumber){
      setStatus("Greater")
    }else if (secretNumber < baseNumber){
      setStatus("Lower")
    }else{
      setStatus("Equal")
    }
  }, [secretNumber])

  const handleGuess = (guess) => {
    if(guess === status){
      navigation.navigate('Score', {success: true, baseNumber:baseNumber, secretNumber: secretNumber, guess: "greater"})
    }else{
      navigation.navigate('Score', {success: false,baseNumber:baseNumber, secretNumber: secretNumber, guess: "lower"})
    }
  }
  
  return (
    <View style={style.container}>
      <Text style={style.startingNumber}>Starting : {isLoading ? "...loading" : baseNumber}</Text>
      <GuessButton guess={"Greater"} onPress={() => handleGuess("Greater")} />
      <GuessButton guess={"Lower"} onPress={() => handleGuess("Lower")} />
    </View>
  )
}

export default Game
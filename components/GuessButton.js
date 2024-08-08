import React from 'react'
import { View, Text, Pressable } from 'react-native'
import style from '../style'
const GuessButton = ({ guess, onPress }) => {
    
    return (
    <Pressable style={guess === "Greater" ? style.greater : style.lower} onPress={onPress}>
        <Text style={style.startButtontext}>{guess}</Text>
    </Pressable>
    )
}

export default GuessButton
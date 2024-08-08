import React from 'react'
import { View, Button, Text } from 'react-native'
import style from '../style'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import StartButton from './StartButton'
const Home = ({navigation}) => {
  return (
    <View style={style.container}>
        <StartButton
            title="Start Game"
            onPress={() => navigation.navigate("Game")}
        />
    </View>
  )
}

export default Home
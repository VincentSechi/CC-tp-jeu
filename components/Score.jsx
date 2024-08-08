import style from "../style"
import { View, Text } from "react-native"
import { Image } from "react-native"
import RetryButton from './RetryButton'
const Score = ({ navigation, route }) => {

  return (
    <View style={style.container}>
      <RetryButton
        title="Retry"
        onPress={() => navigation.navigate("Game")}
      />
      <View style={style.scoreContainer}>
        <Text style={style.scoreText}>This is <Text style={route.params.success ? style.success : style.fail}>{route.params.success ? "win" : "loose"}</Text>, your guess was <Text style={route.params.success ? style.success : style.fail}>{route.params.guess}</Text></Text>
        <Text style={style.scoreText}><Text style={style.secret}>Secret</Text> number was {route.params.secretNumber}</Text>
        <Text style={style.scoreText}><Text style={style.base}>Base</Text> number was {route.params.baseNumber}</Text>

      </View>
      {route.params.success
        ?
        <Image
          source={require(`../assets/trophy.png`)}
          style={{ width: 100, height: 100 }}
        />
        :
        <Image
          source={require(`../assets/death.png`)}
          style={{ width: 100, height: 100 }}
        />
      }
    </View>
  )
}

export default Score
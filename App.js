import React, { useState } from "react";
import {View,Image,StyleSheet,Text,Vibration} from 'react-native';
import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';
import { Pressable } from "react-native";
const App=()=>{

  const [uri,setUri]= useState(DiceFive)


  const onPlayButtonTap=()=>{
    let randomNumber=Math.floor(Math.random()*6)+1
  switch(randomNumber)
  {
    case 1:
      setUri(DiceOne)
      break;
      case 2:
      setUri(DiceTwo)
      break;
      case 3:
      setUri(DiceThree)
      break;
      case 4:
      setUri(DiceFour)
      break;
      case 5:
      setUri(DiceFive)
      break;
      case 6:
      setUri(DiceSix)
      break;
  }
  Vibration.vibrate()
  }

  const onResetButtonTap=()=>{
    let num=setUri(DiceOne)
    switch(num){
    case 1:
      setUri(DiceOne)
      break;
  }
}

return <View style={styles.Container}>
  
  <Image

  source={uri}
  style={styles.tinyLogo}

    />
    <Pressable onPress={onPlayButtonTap}>
    <Text style={styles.gamePlayButton}>Play Game</Text>
</Pressable>
<Pressable onPress={onResetButtonTap}>
    <Text style={styles.gamePlayButton}>Reset</Text>
</Pressable>

</View>
}

export default App

const styles=StyleSheet.create({
Container:{
  flex:1,
  backgroundColor:'#222831',
  alignContent:"center",
  justifyContent:"center",
  alignItems:"center"
 
  
},
tinyLogo:{
  width: 150,
  height:150,
},
gamePlayButton:{
  fontSize:20,
  marginTop:30,
  color:'#F2A365',
  paddingHorizontal:40,
  paddingVertical:10,
  borderWidth:3,
  borderRadius:10,
}

});
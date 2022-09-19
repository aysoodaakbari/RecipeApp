
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
 
const welcomeScreen = () => {
  return (
    <ImageBackground style={styles.background} source={require('../../assets/backgroundFood.jpg')}>
       <View style={styles.cover}></View>
       <View style={{
        backgroundColor:"#fff",
        position:"absolute",
        height:'100%',
        width:'100%',
        zIndex:2,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        marginBottom:20

       }}>
        <View>
            <Text>Hello</Text>
            <Text>FOOD LOVERS</Text>
            <TouchableOpacity>
                <Text>Explorer Now</Text>
            </TouchableOpacity>
        </View>
       </View>
    </ImageBackground>
  )
}

const styles=StyleSheet.create({

    background:{
     flex:1
    },
    cover:{
     flex:1,
     backgroundColor:"#000",
     opacity:0.2
    }

})
export default welcomeScreen
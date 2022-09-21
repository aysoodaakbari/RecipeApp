
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
    <ImageBackground style={styles.background} source={require('../../assets/restaurant/pexels-rachel-claire-5490385.jpeg')}>
       <View style={styles.cover}></View>
       <View style={{
       
        position:"absolute",
        height:'100%',
        width:'100%',
        zIndex:2,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:20

       }}>
        <View>
            <Text style={styles.header}>Hello</Text>
            <Text style={styles.textBody}>FOOD LOVERS</Text>
            <TouchableOpacity style={styles.exbutton}>
                <Text style={{
                  color:"#000",
                  fontWeight:"700"
                }}>Explorer Now</Text>
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
    },
    header:{
      color:"#fff",
      fontSize:45,
      fontWeight:"800",
    textTransform:"capitalize"
      
    },
    textBody:
    {
      color:"#fff",
      fontSize:20,
      fontWeight:"600"
    }
    ,
    exbutton:
    {
       backgroundColor:"#FFF",
       padding:20,
       borderRadius:20,
       alignItems:"center"
    }
    


})
export default welcomeScreen
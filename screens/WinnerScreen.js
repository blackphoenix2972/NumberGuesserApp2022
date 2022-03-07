import { View, StyleSheet, Text, Button, Alert, Image } from "react-native";
import ButtonCustom from "../components/Button";
import Card from "../components/Card";
import UserInputBox from "../components/UserInputBox";
import { useEffect, useState, useRef } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import tick from '../assets/images/tick.png';
const WinnerScreen = ({ route, navigation }) => {
    let cpu_attempts_remaining = route.params.cpu_attempts_remaining;
  return (
    <View style={styles.container}>
      <Card>
        <View>
        <View style={{width:'100%', height:20, justifyContent:'center',marginTop:40, alignContent:'center', textAlign:'center', alignSelf:'center'}}>
            <Image source={tick} style={styles.image}/>
        </View>
          <View style={{width:'100%', marginTop:30}}>

            <Text style={styles.text}>
                Congratulations! Cpu has lost! 
            </Text>
            
          </View>
          <View>
            <Text style={styles.text}>
                Cpu had {cpu_attempts_remaining} attempts remaining.
            </Text>
          </View>
          <View>
          
          </View>
            <View style={{marginTop:20}}>
                <Button title="Play Again" color='red' onPress={() => navigation.navigate("UserInputScreen")}></Button>
                </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "green",

    alignItems: "center",
    justifyContent: "center",
  },
    text: {
        textAlign: "center",
        paddingTop: 20,
        fontSize: 15,
    },
    image: {
        width: 100
        , height: 100
        , alignSelf: 'center',
        justifyContent: 'center',
     
    }

});

export default WinnerScreen;

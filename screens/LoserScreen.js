import { View, StyleSheet, Text, Button, Alert, Image } from "react-native";
import ButtonCustom from "../components/Button";
import Card from "../components/Card";
import UserInputBox from "../components/UserInputBox";
import { useEffect, useState, useRef } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import tick from '../assets/images/incorrect.png';
const LoserScreen = ({ route, navigation }) => {
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
                Sorry, you have lost!
            </Text>
            <Text style={styles.subtitle}>
                Cpu Won!
            </Text>
            
          </View>
          <View>
            <Text style={styles.text}>
              
            </Text>
          </View>
            <View style={{marginTop:10}}>
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
    backgroundColor: "yellow",

    alignItems: "center",
    justifyContent: "center",
  },
    text: {
        textAlign: "center",
        paddingTop: 20,
        fontSize: 20,
    },
    subtitle: {
        textAlign: "center",
        paddingTop: 10,
        fontSize: 15,
    },
    image: {
        width: 100
        , height: 100
        , alignSelf: 'center',
        justifyContent: 'center',
     
    }

});

export default LoserScreen;

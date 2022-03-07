import { useState } from "react";
import { View,StyleSheet, Text, TextInput,  Dimensions, Alert } from "react-native";

const UserInputBox = (props) => {
    
  
    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
            <TextInput 
                
                onChangeText={props.setUserInput}
                placeholder="Enter your number for cpu to guess"
                keyboardType="numeric"
               style={styles.input}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
      
    },
    input: {
        
        height: 40,
        width: '100%',
        padding: 10,
        borderWidth: 1,
        
      },
        textInputContainer: {
            width: '100%',
            marginTop: 50,
           
            alignContent: "center",
            alignItems: "center",
        }
});

export default UserInputBox;
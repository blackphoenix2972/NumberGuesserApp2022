import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
} from "react-native";
import ButtonCustom from "../components/Button";
import Card from "../components/Card";
import UserInputBox from "../components/UserInputBox";
import { useState, useEffect } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";

const UserInputScreen = ({navigation}) => {
  const [userInput, setUserInput] = useState("#");
  const [testStatus, setTestStatus] = useState(false);
  const [enableStartButton, setEnableStartButton] = useState(true);
  useEffect(() => {
    setEnableStartButton(true);
  }, [userInput]);
  return (
    <View style={styles.container}>
      <Card>
        <View>
            <View>
          <UserInputBox setUserInput={setUserInput} /></View>

          <View>{userInputContainerButtons()}</View>
          <View style={styles.startContainer}>{startButtonContainer()}</View>
          <View style={{ marginTop: 50, width: "100%", textAlign: "center" }}>
            <Text style={{color:'white'}}>The number chosen was: {userInput}</Text>
          </View>
        </View>
      </Card>
    </View>
  );

  function startButtonContainer() {
    return (
      <Button
        color="green"
        title="Start"
        onPress={startHandlerButton}
        disabled={enableStartButton}
      />
    );
  }

  function userInputContainerButtons() {
    return (
      <View style={styles.buttonContainer}>
        <Button color="black" title="Reset" onPress={resetUserInput} />
        <Button color="maroon" title="Confirm" onPress={confirmUserInput} />
        <Button color="purple" title="Random" onPress={setRandomUserInput} />
      </View>
    );
  }
  function startHandlerButton() {
    let testStatusIsTrue = testStatus === true;
    if (testStatusIsTrue) {
      
      // navigate to a new page
        navigation.navigate("CpuGameScreen", {userInput: userInput});

    } else {
      Alert.alert("Test failed!");
    }
  }

  function confirmUserInput() {
    console.log(typeof userInput);
    let didUserPassTests = userInputTests();

    if (didUserPassTests === true) {
      setTestStatus(true);
      setEnableStartButton(false);
    } else {
      setTestStatus(false);
      setEnableStartButton(true);
    }
  }

  function userInputTests() {
    if (userInput === "#" || userInput === "") {
      Alert.alert("No Number Found", "Please enter a number into the box");
      setUserInput("#");
    } else if (userInput > 1001) {
      Alert.alert(
        "Number greater than boundary",
        "Number should be between 0 and 1000"
      );
    }
    // index first is a 0 based index
    else if (userInput.toString().charAt(0) === "0") {
      Alert.alert(
        "Number cannot start with 0",
        "Please enter a number that does not start with 0"
      );
    } else if (userInput.toString().includes(".")) {
      Alert.alert(
        "Only whole numbers",
        "Please enter a number that is a whole number"
      );
    } else if (userInput.toString().includes(",")) {
      Alert.alert(
        "Number cannot start with a comma",
        "Please enter a number that does not start with a comma"
      );
    } else if (userInput.toString().includes("-")) {
      Alert.alert(
        "Number cannot be negative",
        "Please enter a number that does not start with a minus sign"
      );
    } else {
      return true;
    }
  }

  function setRandomUserInput() {
    const randomInteger = randomIntFromInterval(0, 1000);
    setUserInput(randomInteger);
  }

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function resetUserInput() {
    setUserInput("#");
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 50,

    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  textInputContainer: {
    width: "100%",
  },
  startContainer: {
    width: "100%",
    flexDirection: "column",

    marginTop: 50,
  },
});

export default UserInputScreen;

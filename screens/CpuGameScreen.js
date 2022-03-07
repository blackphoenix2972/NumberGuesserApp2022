import { View, StyleSheet, Text, Button, Alert } from "react-native";
import ButtonCustom from "../components/Button";
import Card from "../components/Card";
import UserInputBox from "../components/UserInputBox";
import { useEffect, useState, useRef } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
const CpugameScreen = ({ route, navigation }) => {
  var upper_bound = 1000;
  var lower_bound = 0;
  let user_answer = route.params.userInput;
  var array_data = [];
  const MAX_ARRAY_LENGTH = 1000;
  var minimum_number = useRef(0);
  var maximum_number = useRef(1000);

  var start = 0;
  var end = array_data.length - 1;
  var mid = Math.floor((start + end) / 2);

  const [cpu_attempts_remaining, set_cpu_attempts_remaining] = useState(10);
  const [cpu_guess_number, set_cpu_guess_number] = useState(randomIntFromInterval(minimum_number.current, maximum_number.current));
 
  let refContainer = useRef(upper_bound);

 const next_guess_handler =  (direction) => {
   console.log(typeof cpu_guess_number);
   console.log(typeof user_answer);
   console.log(cpu_guess_number)
    console.log(user_answer)
console.log(direction);

if (is_game_over() === true) {
  navigation.navigate("LoserScreen", {
    cpu_attempts_remaining: cpu_attempts_remaining
  })
}
else {
  console.log("inside else");
  if (Number(user_answer) === cpu_guess_number) {
  console.log("inside elssse");

    navigation.navigate("WinnerScreen", {
      cpu_attempts_remaining: cpu_attempts_remaining
    })
  }else {
    if (
      (direction === 'lower' && user_answer > cpu_guess_number) ||
      (direction === 'higher' && user_answer < cpu_guess_number)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' }
      ]);
      return;
    }
    if (direction === 'lower') {
      console.log("loweraa");
      maximum_number.current = cpu_guess_number;
    } else {
      minimum_number.current = cpu_guess_number;
    }
    const nextNumber = randomIntFromInterval(minimum_number.current, maximum_number.current);
    set_cpu_guess_number(nextNumber);
    set_cpu_attempts_remaining(cpu_attempts_remaining => cpu_attempts_remaining - 1);
}}
  }

  useEffect(() => {
    if (cpu_guess_number === user_answer && cpu_attempts_remaining > 0) {
      navigation.navigate("WinnerScreen", {
        cpu_attempts_remaining: cpu_attempts_remaining
      })
    }
    if (cpu_attempts_remaining === 0) {
      navigation.navigate("LoserScreen", {
        cpu_attempts_remaining: cpu_attempts_remaining,
        userInput: user_answer,
      });
    }
  }, [upper_bound]);

  return (
    <View style={styles.container}>
      <Card>
        <View style={{ width: "100%" }}>
          <View style={styles.questionContainer}>
            <Text style={{ textAlign: "center", fontSize: 17 }}>
              Is this your number?
            </Text>
          </View>
          <View style={styles.answerContainer}>
            <Text
              style={{ textAlign: "center", fontSize: 40, fontWeight: "bold" }}
            >
              {cpu_guess_number}
            </Text>
          </View>
          <View>{buttonsContainer()}</View>
        </View>
      </Card>
    </View>
  );
 
  function randomIntFromInterval(min, max) {
    // min and max included
    console.log("\n\nminddd: ", min);
    console.log("maxddd: ", max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function buttonsContainer() {
    return (
      <View style={styles.buttonsContainer}>
        <Button title="Lower" onPress={next_guess_handler.bind(this, 'lower')}></Button>
        <Button title="Higher" onPress={next_guess_handler.bind(this, 'higher')}></Button>
      </View>
    );
  }

  function is_game_over() {
    if (cpu_attempts_remaining === 0) {
      return true;
    } else {
      return false;
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "pink",

    alignItems: "center",
    justifyContent: "center",
  },
  questionContainer: {
    padding: 10,
    width: "100%",
    marginTop: 50,
  },
  answerContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    marginTop: 50,

    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default CpugameScreen;

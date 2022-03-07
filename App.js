import { StyleSheet, Text, View } from 'react-native';
import UserInputScreen from './screens/UserInputScreen.js';
import CpuGameScreen from './screens/CpuGameScreen.js';
import WinnerScreen from './screens/WinnerScreen.js';
import LoserScreen from './screens/LoserScreen.js';


import Header from './components/Header.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>

      <Header />
      <NavigationContainer>
      <Stack.Navigator  >
    
        <Stack.Screen name="UserInputScreen" component={UserInputScreen} options={{headerShown:false}}  />
        <Stack.Screen name="CpuGameScreen" component={CpuGameScreen } options={{title:null}} />
        <Stack.Screen name="WinnerScreen" component={WinnerScreen} options={{headerShown:false}}  />
        <Stack.Screen name="LoserScreen" component={LoserScreen} options={{headerShown:false}}  />

     
      </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ac6c9',
    justifyContent:'space-around',
  },
});

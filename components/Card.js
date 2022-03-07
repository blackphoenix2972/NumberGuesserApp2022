import { View, StyleSheet, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient'
const Card = (props) => {
    return (
        <View style={{width:props.width,margin: 10,
            marginTop: 50,
            elevation: 5,
            backgroundColor: "#fff", height:300, padding:20, borderRadius:10 }}>
               
            <Text style={styles.text}>{props.children}</Text>
         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        
        
        marginTop: 50,
        elevation: 5,
        backgroundColor: "#fff",

    }
})

export default Card;
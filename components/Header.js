import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Number Guesser</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: "10%",
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
    }
    ,
    title : {
        textAlign: "center",
        paddingTop: 20,
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default Header;
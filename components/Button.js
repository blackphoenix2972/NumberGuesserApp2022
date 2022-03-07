import {StyleSheet, View, Button } from 'react-native';

const ButtonCustom = (props) => {
    return (
        <View style={styles.container}>
         
            <Button style={{margin:20}} title='dxd'/>
            <Button style={{margin:20}} title='dxd'/>
            <Button style={{margin:20}} title='dxd'/>
            <Button style={{margin:20}} title='dxd'/>
            <Button style={{margin:20}} title='dxd'/>
            <Button style={{margin:20}} title='dxd'/>
            <Button style={{margin:20}} title='dxd'/>


   

         
</View>
        
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default ButtonCustom;
import {StyleSheet, Text, View, ScrollView, Button, Pressable} from 'react-native';
// import { FAB } from 'react-native-elements';

function addHabitFunction(navigation){
    return navigation?.navigate('AddHabit');
  }

const floatingButton = ({navigation, callback}) => {
    return <View style={styles.buttonView}>
        {/* <FAB title='+' placement='right' onPress={callback} /> */}
        <Pressable style={styles.button} onPress={addHabitFunction(navigation)}>
            <Text>+</Text>
        </Pressable>
    </View>;
    
}

const styles = StyleSheet.create({
    buttonView: {
        position: 'absolute',
        right: 30,
        bottom: 50
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#ccc',
        padding: 15,
        borderRadius: 50,
        width: 50,
        height: 50
    }
})

export default floatingButton;
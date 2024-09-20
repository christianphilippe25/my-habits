import { StyleSheet, Text, View, ScrollView, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Habits from '../habits/index'
import styles from './style'

const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];


// const days = [];
// for(let i = -5; i < 5; i++){
//     const day = today.getDate();
//     days.push(new Date(today.setDate(day + i)))
// }

const today = new Date();
const day = today.getDate();
const month = months[today.getMonth()];

const HomeScreen = ({ navigation }) => {
    return (
        <View style={ StyleSheet.create({ display:"flex", flex: 1, alignItems:"center" }) }>
            <Text style={ styles.month }>
                {month}
            </Text>
            <Text style={ styles.day }>
                {day}
            </Text>
            <Habits />
            <View style={styles.buttonView}>
                {/* <FAB title='+' placement='right' onPress={callback} /> */}
                <Pressable style={styles.button} onPress={() => addHabitFunction(navigation)}>
                    <Text>+</Text>
                </Pressable>
            </View>
        </View>
    );
};

function addHabitFunction(navigation) {
    return navigation.navigate('AddHabit');
}

export default HomeScreen
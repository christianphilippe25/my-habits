import { StyleSheet, Text, View, ScrollView, Button, Pressable } from 'react-native';
import FloatingButton from '../../components/floatingButton'
import styles from './style'

const habits = [
    {
        title: 'Tomar Agua'
    },
    {
        title: 'Feijao de molho'
    },
    {
        title: 'Jogar lixo Fora'
    }
];

const Habits = ({navigation}) => {
    return (
        <View >
            <ScrollView>
                    {
                        habits.map((habit, index) => {
                            return (
                                <View style={styles.habitView} key={index}>
                                    <Text>{habit.title}</Text>
                                </View>
                            );
                        })
                    }
            </ScrollView>
        </View>
    )
}



export default Habits;
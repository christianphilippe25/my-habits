import {StyleSheet, Text, View, ScrollView, Button, Pressable} from 'react-native';
import FloatingButton from '../../components/floatingButton'

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

const HomeScreen = ({navigation}) => {
  return (
    <View style={StyleSheet.create({ flex: 1 })}>
      <ScrollView>
        <View style={styles.titleView}>
          <Text style={styles.title}>My habits</Text>
        </View>
        <ScrollView horizontal={true} style='styles.habitsContainer'>
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
      </ScrollView>

      <View style={styles.buttonView}>
        {/* <FAB title='+' placement='right' onPress={callback} /> */}
        <Pressable style={styles.button} onPress={() => addHabitFunction(navigation)}>
            <Text>+</Text>
        </Pressable>
    </View>
      {/* <FloatingButton /> */}
      
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
      />
    </View>
  );
};

function addHabitFunction(navigation){
  return navigation.navigate('AddHabit');
}

const styles = StyleSheet.create({
  habitsContainer: {
    padding: 20,
    display: 'flex',
    flex: 1,
    maxHeight: 100
  },
  habitView: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    padding: 20,
    backgroundColor: '#ccc',
  },
  title: {
    padding: 30,
    fontWeight: 'bold',
    fontSize: 25
  },
  titleView: {
    display: 'flex',
    alignItems: 'center'
  },
  
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
  
export default HomeScreen
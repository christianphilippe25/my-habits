import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';

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
    // <Button
    //   title="Go to Jane's profile"
    //   onPress={() =>
    //     navigation.navigate('Profile', {name: 'Jane'})
    //   }
    // />
  );
};

const styles = StyleSheet.create({
  habitsContainer: {
    padding: 20
    // display: 'flex',
    // flex: 1
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
  }
})
  
export default HomeScreen
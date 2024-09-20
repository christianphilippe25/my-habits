import { StyleSheet, Text, View, ScrollView, Button, Pressable } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../dashboard/index'
import AddHabit from '../addHabit/index'

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        screenOptions={{ headerShown: false }}
      />
      <Stack.Screen name="AddHabit" component={AddHabit} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Component1 from './components/home.js';
import Component2 from './components/login.js';
import Component3 from './components/registro.js';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Component1">
       
        <Stack.Screen name="Component1" component={Component1} />
        <Stack.Screen name="Component2" component={Component2} />
        <Stack.Screen name="Component3" component={Component3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
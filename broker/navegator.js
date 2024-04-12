import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Component1 from './components/home.js';
import Component2 from './components/login.js';
import registro from './components/registro.js';
import  lista  from './components/listaacciones.js';
import  edicionuser from './components/edicionuser.js';
import edicion from './components/edision.js';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="edicion">
       
        <Stack.Screen name="Component1" component={Component1} />
        <Stack.Screen name="Component2" component={Component2} />
        <Stack.Screen name="registro" component={registro} />
        <Stack.Screen name="lista" component={lista} />
        <Stack.Screen name="edicionuser" component={edicionuser} />
        <Stack.Screen name="edicion" component={edicion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

import React from 'react';
import {
  Text,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Chat from './screens/Chat';
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen 
            name="Login"
            component={Login}
            options={{
              headerStyle:{
                backgroundColor:"#0f4c75"
              },
              title: "Login",
              headerTitleStyle:{
                textAlign:"center",
                color:"#00b7c2"
              }
            }}
            >

            </Stack.Screen>
            <Stack.Screen 
            name="SignUp"
            component={SignUp}
            options={{
              headerStyle:{
                backgroundColor:"#0f4c75"
              },
              title: "SignUp",
              headerTitleStyle:{
                textAlign:"center",
                color:"#00b7c2"
              }
            }}
            >

            </Stack.Screen>
            <Stack.Screen 
            name="Chat"
            component={Chat}
            options={{
              headerStyle:{
                backgroundColor:"#0f4c75"
              },
              title: "Chat",
              headerTitleStyle:{
                textAlign:"center",
                color:"#00b7c2"
              }
            }}
            >

            </Stack.Screen>

          </Stack.Navigator>

    
      </NavigationContainer>
    </>
  );
};


export default App;

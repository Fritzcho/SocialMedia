import { ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native-web';
import { QrScreen, Chat } from './src/views';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home}options={{title: 'Welcome',
            headerShown: false,
          }}/>
          <Tab.Screen name="Chat" component={Chat} options={{title: 'Chat',
            headerShown: false,}} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

import Image from './assets/Gradient.svg';

function Home() {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{title: 'Welcome',
          headerShown: false,
        }}
      />
      <Stack.Screen name="QrScreen" component={QrScreen} options={{title: 'Scan QR'}} />
    </Stack.Navigator>
  );
}

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
            <Button
              title="Go to Jane's profile"
              onPress={() =>
                navigation.navigate('QrScreen', {name: 'Jane'})
              }
            />
             </ImageBackground>
        </View>
    );
};


export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  });
  

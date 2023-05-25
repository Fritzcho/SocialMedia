import { ImageBackground, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-web';
import { QrScreen, Chat } from './src/views';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
        
        screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            tabBarStyle: [
                {
                    display: "flex",
                    backgroundColor: 'white',
                    borderRadius: 300,
                    borderRadius: 300,
                    position: 'absolute',
                    marginRight: 10,
                    marginLeft: 10,
                    marginBottom: 5,
                    shadowColor: '#171717',
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                    height: 55,
                }
            ],
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home-outline';
              } if (route.name === 'Chat') {
                iconName = focused ? 'ios-chatbubble' : 'ios-chatbubble-outline';
              }
              if (route.name === 'Map') {
                iconName = focused ? 'ios-map' : 'ios-map-outline';
              }
  
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#23ABE6',
            tabBarInactiveTintColor: 'gray',
          })}>
        <Tab.Screen name="Map" component={Chat} options={{title: 'Map',
            headerShown: false,}} />
          <Tab.Screen name="Home" component={Home}options={{title: 'Home',
            headerShown: false,
          }}/>
          <Tab.Screen name="Chat" component={Chat} options={{title: 'Chat',
            headerShown: false,}} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

import Background from './assets/Gradient.svg';
import Qr from './assets/QRIcon.svg';


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
      <Stack.Screen name="QrScreen" component={QrScreen} options={{title: 'Connect',
      headerStyle: {
        position: 'absolute',
        headerTransparent: true,
      },}} 
      />
    </Stack.Navigator>
  );
}

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
                <TouchableOpacity
                    style={styles.button}
                  title="Connect"
                  onPress={() =>
                    navigation.navigate('QrScreen', {name: 'Jane'})
                  }>
                    <Image source={Qr} resizeMode="cover" style={styles.buttonBack}/>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    button: {
        borderRadius: 500,
        position: 'absolute',
        bottom: 60,
    },
    buttonBack: {
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 500,
        justifyContent: 'center',
    }
  });
  

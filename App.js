import { ImageBackground, StyleSheet, Text, View, StatusBar, Image,TouchableOpacity, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Calendar, Goals } from './src/components';
import { QrScreen, Chat, Map } from './src/views';
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
  
              if (route.name === 'HomeScreen') {
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
          <Tab.Screen name="Map" component={Map} options={{title: 'Map',
            headerShown: false,}} />
          <Tab.Screen name="HomeScreen" component={Home}options={{title: 'Home',
            headerShown: false,
          }}/>
          <Tab.Screen name="Chat" component={Chat} options={{title: 'Chat',
            headerShown: false,}} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

// import Background from './assets/Gradient.png';
// import Qr from './assets/qrCode.png';


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
          <ScrollView style={{ flex: 1, width: "100%" }} contentContainerStyle={{ flexGrow: 1 }}>
            <ImageBackground source={require('./assets/Gradient.png')} style={styles.image}>
                <Goals/>
            </ImageBackground>
                <Calendar/>
          </ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    title="Connect"
                    onPress={() =>
                    navigation.navigate('QrScreen', {name: 'Jane'})
                  }>
                    <Image source={require('./assets/qrCode.png')} resizeMode="cover" style={styles.buttonBack}/>
                </TouchableOpacity>
        </View>
      
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    image: {
      paddingVertical: 50,
      width: "100%"
    },
    text: {
      alignItems:"center",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: 20,
      lineHeight:23,
      color: "white",
      marginBottom: 15,
    },
    button: {
        borderRadius: 500,
        position: 'absolute',
        bottom: 50,
        right: 5,
    },
    buttonBack: {
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 500,
        justifyContent: 'center',
    },
  });
  

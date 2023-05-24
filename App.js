import { ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button } from 'react-native-web';
import { QrScreen } from './src/views/QrScreen';

const Stack = createNativeStackNavigator();

const image = {uri: './assets/Gradient.svg'};

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome',
            headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name="QrScreen" component={QrScreen} options={{title: 'Scan QR'}} />
        </Stack.Navigator>
        
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Button
              title="Go to Jane's profile"
              onPress={() =>
                navigation.navigate('QrScreen', {name: 'Jane'})
              }
            />
             <Text style={styles.text}>Inside</Text>
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
  

import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";

import Image from '../../assets/Gradient.svg';

const QrScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
                <Text>Connect with new friends!</Text>
            </ImageBackground>
        </View>
    );
};

export default QrScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
  });
  
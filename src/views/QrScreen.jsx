import React from "react";
import { Text, View, ImageBackground } from "react-native";

import Image from '../../assets/Gradient.svg';

const QrScreen = ({navigation, route}) => {
    return (
        <View>
            <ImageBackground source={Image} resizeMode="cover">
                <Text>This is {route.params.name}'s profile</Text>
            </ImageBackground>
        </View>
    );;
};

export default QrScreen

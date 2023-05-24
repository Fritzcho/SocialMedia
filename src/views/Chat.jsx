import React from "react";
import { Text, View, ImageBackground } from "react-native";

import Image from '../../assets/Gradient.svg';

const Chat = ({navigation, route}) => {
    return (
        <View>
            <ImageBackground source={Image} resizeMode="cover">
                <Text>This is the chat page</Text>
            </ImageBackground>
        </View>
    );;
};

export default Chat


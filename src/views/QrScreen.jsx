import React from "react";
import { Text, View } from "react-native";

export const QrScreen = ({navigation, route}) => {
    return (
        <View>
            <Text>This is {route.params.name}'s profile</Text>
        </View>
    );;
};
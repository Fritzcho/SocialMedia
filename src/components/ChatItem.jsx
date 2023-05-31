import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ChatItem = ({inputText}) => {
    return(
        <LinearGradient colors={['rgba(35, 171, 230, 0.75) ', 'rgba(92, 190, 233, 0.75)']}
        start={[0, 0]}
        end={[1, 0]} style={styles.calContainer}>
            <View style={styles.darkContainer}>
                <Image source={require('../../assets/pfp.png')} style={{width: 60, height: 60}}></Image>
                <Text style={styles.text}>
                    {inputText}
                </Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    calContainer: {
        backgroundColor: "white",
        borderRadius: 100,
        marginHorizontal: 5,
        marginBottom: 15,
    },
    darkContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems:"center",
        backgroundColor: 'rgba(0, 0, 0, 0.1)', 
        borderRadius:100,
        paddingHorizontal: 10, 
        paddingVertical: 10,
        gap: 15,
    },
    text: {
        fontFamily: 'Heavitas',
        color:"white",
        maxWidth: "70%"
    },
    ButtonText: {
        fontFamily: 'Heavitas',
        color:"white",
    },
    moreButton: {
        borderRadius: 100,
        padding:5,
        paddingHorizontal:15,
    }
}); 
export default ChatItem;
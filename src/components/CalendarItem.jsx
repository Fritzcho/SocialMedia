import React from "react";
import {Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CalendarItem = ({inputText}) => {
    return(
        <LinearGradient colors={['rgba(35, 171, 230, 0.75) ', 'rgba(92, 190, 233, 0.75)']}
        start={[0, 0]}
        end={[1, 0]} style={styles.calContainer}>
            <View style={styles.darkContainer}>
                <Text style={styles.text}>
                    {inputText}
                </Text>
                <TouchableOpacity>
                    <LinearGradient

                      // Button Linear Gradient
                      colors={['#FEBA72', '#EC9E56']}
                      style={[styles.moreButton]}>

                      <Text style={[styles.ButtonText,  {fontSize: 14}]}>See more</Text>

                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    calContainer: {
        backgroundColor: "white",
        borderRadius: 100,
    },
    darkContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems:"center",
        backgroundColor: 'rgba(0, 0, 0, 0.1)', 
        borderRadius:100,
        paddingHorizontal: 15, 
        paddingVertical: 15,
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
export default CalendarItem;
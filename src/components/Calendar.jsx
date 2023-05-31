import React from "react";
import {Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CalendarItem from "./CalendarItem";

const Calendar = ({}) => {
    return (
        <View style={styles.whiteContainer}>
            <Text style={styles.heading}>Your upcoming events</Text>
            <Text style={styles.subheading}>This week</Text>
            <CalendarItem inputText={"Bowling in Melbourne"}/>
            <CalendarItem inputText={"Dodgeball at the park"}/>
            <CalendarItem inputText={"Come play with dogs!"}/>
            <Text style={styles.subheading}>Next week</Text>
            <CalendarItem inputText={"Beach-volley at ECU campus"}/>
            <TouchableOpacity>
                    <LinearGradient
                      // Button Linear Gradient
                      colors={['#FEBA72', '#EC9E56']}
                      style={[styles.moreButton]}>
                      <Text style={[styles.ButtonText,  {fontSize: 14}]}>Calendar</Text>
                    </LinearGradient>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    whiteContainer:{
        display: "flex",
        marginTop: -25,
        marginHorizontal: "5%",
        borderRadius: 25,
        minHeight: 100,
        padding: 15,
        paddingVertical: 25,
        elevation: 3,
        backgroundColor: 'white',
        marginBottom: 175,
        gap: 15,
    },
    heading: {
        alignSelf: 'center',
        fontFamily: 'Heavitas',
        color: "#2C2C2C",
    },
    subheading: {
        fontSize: 12,
        fontFamily: 'Heavitas',
        color: "#2C2C2C",
        alignSelf: 'center',
    },
    ButtonText: {
        fontFamily: 'Heavitas',
        color:"white",
        alignSelf: 'center',
    },
    moreButton: {
        borderRadius: 100,
        padding:15,
        paddingHorizontal:50,
        position: 'absolute',
        alignSelf: 'center',
    }
});

export default Calendar;
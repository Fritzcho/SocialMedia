import React from "react";
import {Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font';

const Goals = ({}) => {
    const [loaded] = useFonts({
        Heavitas: require('../../assets/fonts/Heavitas.ttf'),
      });

    if (!loaded) {
      return null;
    }
    return (
        <View syle={styles.goalsContainer}>
                <Text style={[styles.text, {alignSelf: 'center'}]}>CURRENT GOALS</Text>
                
                <View style={styles.colflex}>
                    <Text style={styles.goalText}>Meet 5 new people this week</Text>
                    <View style={styles.progressBar}>
                    <LinearGradient colors={['#FEBA72', '#EC9E56']} style={[StyleSheet.absoluteFill, {backgroundColor: '#EC9E56', width: '70%', borderRadius:15}]}/>
                    </View>
                </View>
                
                <View style={styles.colflex}>
                    <Text style={styles.goalText}>Find 2 new friends this month</Text>
                    <View style={styles.progressBar}>
                    <LinearGradient colors={['#FEBA72', '#EC9E56']} style={[StyleSheet.absoluteFill, {backgroundColor: '#EC9E56', width: '50%', borderRadius:15}]}/>
                    </View>
                </View>
                
                <View style={styles.colflex}>
                    <Text style={styles.goalText}>Attend atleast one public event this month</Text>
                    <View style={styles.progressBar}>
                    <LinearGradient colors={['#FEBA72', '#EC9E56']} style={[StyleSheet.absoluteFill, {backgroundColor: '#EC9E56', width: '20%', borderRadius:15}]}/>
                    </View>
                </View>

                <TouchableOpacity>
                    <LinearGradient

                      // Button Linear Gradient
                      colors={['#FEBA72', '#EC9E56']}
                      style={[styles.moreButton]}>

                      <Text style={[styles.text,  {fontSize: 14}]}>See more</Text>

                    </LinearGradient>
                </TouchableOpacity>
        </View>
    );
}

export default Goals;

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    colflex: {
        marginHorizontal: '10%',
        gap: 2,
        marginBottom: 7,
    },
    text: {
        fontFamily: 'Heavitas',
        alignItems:"center",
        fontFamily:"Heavitas",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: 18,
        lineHeight:18,
        color: "white",
        marginBottom: 15,
        marginTop: 15,
    },
    progressBar: {
      height: 20,
      flexDirection: "row",
      width: '100%',
      backgroundColor: 'white',
      borderRadius: 15,
      marginBottom:10,
    },
    goalText: {
      fontFamily:'Heavitas',
      fontStyle: 'normal',
      fontWeight: 200,
      fontSize: 14,
      color: 'white',
    },
    moreButton:{
      borderRadius: 500,
      padding: 0,
      elevation: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#EC9E56',
      marginRight: "20%",
      marginLeft: "20%",
    },
  });
import React, { useRef, useEffect, useState } from 'react';
import { Text, View, ImageBackground, StyleSheet,Image, TouchableOpacity, Pressable } from "react-native";
import ScanModal from "../components/ScanModal";

//import Image from '../../assets/Gradient.png';

const QrScreen = ({navigation, route}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/Gradient.png')} resizeMode="cover" style={styles.image}>
              <View style={styles.text}>
                <Text style={[styles.text, {fontSize: 40, lineHeight: 40, color: "#FEBA72"}]}>!</Text>
                <Text style={styles.text}>SCAN THE QR-CODE TO ADD FRIENDS OR TO CONNECT WITH EXISTING FRIENDS</Text>
                <Pressable onPress={() => setModalVisible(true)}>
                  <Image source={require('../../assets/qrCodeBig.png')}></Image>
                </Pressable>
              </View>
              <ScanModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            </ImageBackground>
        </View>
    );
};

export default QrScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: 25,
    },
    text:{
      alignItems:"center",
      justifyContent: "center",
      textAlign: "center",
      fontFamily:"Heavitas",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: 20,
      lineHeight:23,
      color: "white",
      marginHorizontal: 15
    }
  });
  
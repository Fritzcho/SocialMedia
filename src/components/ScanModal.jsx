import { View, Text, Modal, StyleSheet, Pressable, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const ScanModal = ({modalVisible, setModalVisible}) => {
  return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
            
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image source={require('../../assets/checkmark.png')} style={{width: 60, height: 60, top: -60}}></Image>
                  <Text style={styles.heading}>You met with Oscar!</Text>
                  <Text style={styles.subtext}>And gained 25 points!</Text>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <LinearGradient colors={['#FEBA72', '#EC9E56']} style={[styles.buttonClose]}>
                    {/* <Text style={styles.textStyle}>Close</Text> */}
                    <Text style={[styles.text,  {color: "white"}]}>Cool!</Text>
                    </LinearGradient>
                  </TouchableOpacity>
           
                </View>
              </View>
                
        </Modal>
  );
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: "Heavitas",
        fontSize: 20,
    },
    subtext: {
        fontFamily: "Heavitas",
        fontSize: 12,
    },
    text: {
        fontFamily: "Heavitas",
        fontSize: 16,
    },
    modalView: {
        flexDirection: 'column',
        marginHorizontal:20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        top: "40%"
      },
    buttonClose: {
        backgroundColor: '#CF4E25',
        paddingHorizontal: 35,
        paddingVertical: 15,
        borderRadius: 100,
        bottom:-53,
    },
});

export default ScanModal
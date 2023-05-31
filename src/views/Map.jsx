import { StyleSheet, Text, View, Image, Modal, Pressable, Button } from 'react-native';
import Mapbox, { Camera, MapView, UserLocation, MarkerView } from '@rnmapbox/maps';
import React, { useRef, useEffect, useState } from 'react';

Mapbox.setAccessToken('pk.eyJ1IjoiZmlhbGlzYSIsImEiOiJjbGh1ajJ4dGMwMGJvM2ptd3R3ZzVjY240In0.oW86IXMCY_WKl0UD99JDAA');

const Map = ({navigation, route}) => {
    const mapRef = useRef(null);
    const [show, setShow] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
  
    useEffect(() => {
      const rper = async () => {
        const res = await Mapbox.requestAndroidLocationPermissions();
        if(res) {
          setShow(true);
          Mapbox.locationManager.start();
        }
      }
      rper();
      return () => {
        Mapbox.locationManager.stop();
      };
    }, []);
  
    if (!show) {
      return <View />;
    }
   
    return (
      <View style={styles.container}>
     
        <MapView
          useRef={mapRef}      
          style={styles.map}
          styleURL='mapbox://styles/fialisa/clhujytxe024d01pn3oh05y3u'
          
          animationMode={'flyTo'}
        >
          
          <Camera zoomLevel={16}
              followUserMode={'normal'}
              followUserLocation/>
         
          
          <UserLocation />
          
          <MarkerView coordinate={[20.263035,63.825848]}>
              <View>
                <Pressable onPress={() => setModalVisible(true)}>
                  <Image source={require('../../assets/trialPin.png')}  style={{width: 44, height: 48}}/>
                </Pressable>
              </View>
          </MarkerView>
          <MarkerView coordinate={[20.299754,63.822979]}>
              <View>
                <Pressable onPress={() => setModalVisible(true)}>
                  <Image source={require('../../assets/trialPin.png')}  style={{width: 44, height: 48}}/>
                </Pressable>
              </View>
          </MarkerView>
          <MarkerView coordinate={[20.310565,63.822085]}>
              <View>
                <Pressable onPress={() => setModalVisible(true)}>
                  <Image source={require('../../assets/trialPin.png')}  style={{width: 44, height: 48}}/>
                </Pressable>
              </View>
          </MarkerView>
          <MarkerView coordinate={[20.316880,63.819171]}>
              <View>
                <Pressable onPress={() => setModalVisible(true)}>
                  <Image source={require('../../assets/trialPin.png')}  style={{width: 44, height: 48}}/>
                </Pressable>
              </View>
          </MarkerView>
          <MarkerView coordinate={[20.252574,63.807722]}>
              <View>
                <Pressable onPress={() => setModalVisible(true)}>
                  <Image source={require('../../assets/trialPin.png')}  style={{width: 44, height: 48}}/>
                </Pressable>
              </View>
          </MarkerView>
        
        </MapView>
        
        <Modal 
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
            
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
            
                  <Text style={styles.heading}>BOWLING FOR FUN</Text>
                  
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    {/* <Text style={styles.textStyle}>Close</Text> */}
                    <Image source={require('../../assets/Exit_cross.png')} style={{width: 12, height: 12}}></Image>
                  </Pressable>
                  
                  <Image source={require('../../assets/date.png')} style={{width: 19, height: 19}}></Image>
                  <Text style={styles.text}>  MAY 14                                             {'\n'}</Text>
  
                  <Image source={require('../../assets/time.png')} style={{width: 20, height: 20.4}}></Image>
                  <Text style={styles.text}>  2PM-5PM                                          {'\n'}</Text>
  
                  <Image source={require('../../assets/place.png')} style={{width: 15, height: 20, marginLeft:3}}></Image>
                  <Text style={styles.text}>  Byron Bay, 000 Street {'\n'}</Text>
                  
                  <Text style={styles.desc}>This is a little bit of information about the event</Text>
           
                </View>
                  <Pressable style={[styles.trueButton,{top: 490,left: 55,}]}>
                    <Text style= {[styles.buttonText,{color: 'white'}]}>ATTEND</Text>
                  </Pressable>
                  <Pressable style={[styles.trueButton,{top: 490,left: 155,}]}>
                    <Text style= {[styles.buttonText,{color: 'white'}]}>MORE INFO</Text>
                  </Pressable>
                  <Pressable style={[styles.trueButton,{top: 490,left: 286,padding:8, paddingTop:5, paddingBottom:10}]}>
                    <Image source={require('../../assets/HeartIcon3.png')} style={{width: 24, height: 24}}></Image>
                  </Pressable>
              </View>
              
          </Modal>
         
      </View>
    );
};

export default Map

const styles = StyleSheet.create({
  heading:{
    fontFamily:'Heavitas',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 20,
    lineHeight:20,
    color: '#000000',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,

  },
  text:{
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 16,
    lineHeight:16,
    color: '#000000',
    alignSelf:'flex-start',
    flexDirection: 'row',
    marginTop: 3,
  },
  desc:{
    fontStyle: 'normal',
    fontWeight: 200,
    fontSize: 16,
    lineHeight:16,
    color: '#000000',
    alignSelf:'flex-start',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    height: 300,
    width: 300,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal:20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom:30,
    
  },
  button: {
    borderRadius: 15,
    padding: 8,
    elevation: 2,
  },

  buttonClose: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#CF4E25',
    marginLeft: 46,
    marginBottom: 2,
  },
  trueButton:{
    borderRadius: 100,
    padding: 10,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EC9E56',
    
    position: 'absolute',
        
  },
  map: {
    width:'100%',
    height:'100%'
  },
  buttonText: {
    fontFamily: 'Heavitas',
    color:"white",
    alignSelf: 'center',
},
});

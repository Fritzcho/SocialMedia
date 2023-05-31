import React from "react";
import { Text, View, ImageBackground, StyleSheet, ScrollView } from "react-native";
import ChatItem from "../components/ChatItem";

const Chat = ({}) => {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: "white", padding: 15, elevation: 5, borderRadius: 100, width: "95%", marginTop: 25}}>
            <Text style={styles.text}>
                Search...
            </Text>
        </View>
        <ScrollView style={{ flex: 1, width: "100%", gap: 15 }} contentContainerStyle={{ flexGrow: 1 }}>
          <ChatItem inputText={"John Doe"}/>
          <ChatItem inputText={"Joe"}/>
          <ChatItem inputText={"Joe Who"}/>
          <ChatItem inputText={"Joe Mama"}/>
        </ScrollView>
      </View>
    );;
};

export default Chat

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      gap: 15,
      },
    image: {
      flex: 1,
      justifyContent: 'center',
      gap: 15,
    },
  });
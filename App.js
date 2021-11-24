import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

export default function App() {
  // All Functions
  var textInputValue = "<answer goes here>"; // String variable
  const handlePress = () => console.log(textInputValue); // const arrow function
  const handleChangeText = () => console.log(textInputValue); // const arrow function

  return (
    <View style={main.container}>
      <View style={main.topSection}>
      <Text style={main.bigText}>Hello World! </Text>
      <Text style={main.mediumText}>First Reactive Native App</Text>
      <Text>This is a paragraph explaining what this app is all about. As you can see there are already many components including text, images and buttons.</Text>
      </View>
      
      
      <Text style={main.questionText}>What would you like to get out of this course?</Text>
      <TextInput style={main.inputText} placeholder="Initial Text" onChangeText={handleChangeText} />
      
      
      <Text style={main.questionText}>An emoji describing how you are feeling about the course:</Text>
    
      <Image
        style={{ width: 100, height: 100, marginBottom: "20px"}}
        source={{
          uri: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        }}

      />
      <Button title="Submit" onPress={handlePress}/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "left",
  },
  bigText: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  mediumText: {
    fontSize: "1rem",
  },
  topSection: {
    backgroundColor: "#ADD8E6",
    padding: "20px",
  },
  inputText: {
    backgroundColor: "#D3D3D3",
    textAlign: "left",
    width: "80%",
    height: "50px",
  },
  questionText: {
    fontWeight: "bold",
    padding: "20px",
  },
});

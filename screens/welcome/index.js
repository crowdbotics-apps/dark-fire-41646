import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={require("./logo.png")} />
          <Text style={styles.text}>
            Let's build something amazing together!
          </Text>
        </View>
        <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
      <ImageBackground style={_styles.bXZnBdBo}></ImageBackground></ScrollView>
    </SafeAreaView>;
};

export default WelcomeScreen;

const _styles = StyleSheet.create({
  bXZnBdBo: {
    width: 107,
    height: 62
  }
});
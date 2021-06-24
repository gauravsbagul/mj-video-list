import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const replaceHtmlstags = (str) => str?.replace(/<[^>]*>/g, " ") || "";

const Description = (props) => {
  const { route, navigation } = props;

  const item = route?.params?.item;
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Artist Name : {item?.artistName}</Text>
      <Text style={styles.title}>Description :</Text>
      <Text style={styles.description}>
        {replaceHtmlstags(item?.longDescription) ||
          replaceHtmlstags(item?.shortDescription) ||
          replaceHtmlstags(item?.description)}
      </Text>
      <Button
        onPress={() => navigation.navigate("App")}
        title="Back"
        color="#000"
        style={{ width: "30%" }}
      >
        <Text>Back</Text>
      </Button>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 20,
    padding: 30,
    alignSelf: "center",
    marginBottom: 10
  },
  title: {
    fontSize: 15,
    fontWeight: "bold"
  },
  description: {
    fontSize: 15,
    fontWeight: "300"
  }
});

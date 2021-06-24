import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";

const VideoCard = ({ index, item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Description", { item: item })}
    >
      <ImageBackground
        style={styles.thumbnail}
        showOnStart={true}
        source={{ uri: item.artworkUrl100 }}
      />
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Artist Name : {item.artistName}
      </Text>
    </TouchableOpacity>
  );
};
export default VideoCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    // height: 300,
    borderRadius: 20,
    padding: 30,
    alignSelf: "center",
    marginBottom: 10
  },
  thumbnail: {
    width: "100%",
    height: 300,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 20
  },
  thumbnailImage: {
    height: 300,
    borderRadius: 20
  },
  playButtonWrapper: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#000",
    borderColor: "#fff",
    borderWidth: 0.5,
    opacity: 0.6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  }
});

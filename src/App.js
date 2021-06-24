import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  RefreshControl
} from "react-native";
import axios from "axios";

import VideoCard from "./components/VideoCard";

const App = (props) => {
  const { navigation } = props;
  const [videoList, setVideoList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [limit, setLimit] = useState(10);
  const [isError, serIsError] = useState(null);

  useEffect(() => {
    getVideosFromAPI(10);
    return () => {};
  }, []);

  const getVideosFromAPI = async (limit) => {
    try {
      const response = await axios(
        `https://itunes.apple.com/search?term=Michael+jackson&limit=${limit}`
      );
      // const response = await res.json();
      setLimit(response?.resultCount + 10);
      setVideoList(response?.results);
      serIsError(null);
    } catch (error) {
      serIsError(error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setVideoList([]);
    getVideosFromAPI(limit);
    setRefreshing(false);
  };
  console.log("isError", isError);
  return (
    <View style={styles.app}>
      {isError ? (
        <Text>Something Went wrong </Text>
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => onRefresh()}
            />
          }
          data={[...videoList]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <VideoCard item={item} index={index} navigation={navigation} />
          )}
          ListFooterComponent={<View style={{ height: 150 }} />}
          onEndReached={() => getVideosFromAPI(limit)}
          ListEmptyComponent={<ActivityIndicator />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;

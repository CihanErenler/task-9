import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Posts from "../components/Posts";
import data from "../../data";

const HomeScreen = ({ navigation }) => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    data
      .getAllData()
      .then((res) => setPostList(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <CustomButton onPress={() => navigation.navigate("AddPost")}>
        Add Post
      </CustomButton>
      <View>
        <Posts posts={postList} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
});

export default HomeScreen;

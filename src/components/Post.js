import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Post = ({ data }) => {
  return (
    <View>
      <Text>{data.body}</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <View>
      {posts.length === 0 ? (
        <Text>No post to show</Text>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <Post data={item} />;
          }}
        />
      )}
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});

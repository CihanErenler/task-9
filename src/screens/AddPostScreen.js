import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import CustomButton from "../components/CustomButton";

const AddPostScreen = ({ onPress, value, handleChange }) => {
  return (
    <View>
      <TextInput
        placeholder="Say something..."
        value={value}
        onChangeText={handleChange}
      />
      <CustomButton onPress={onPress}>Add Post</CustomButton>
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({});

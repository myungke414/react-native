import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>스파르타 코딩클럽!!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //영역을 잡는 속성입니다. 따로 자세히 다룹니다.
    //flex: 1은 전체 화면을 가져간다는 뜻입니다
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignContent:"center"
  },
  textContainer: {
    margin:10,
    padding: 10,
    borderRadius:10,
    borderWidth:2,
    borderColor:"#000",
    borderStyle:"dotted",

  },
  textStyle: {
    //글자 색을 결정합니다. rgb, 값 이름, 색상코드 모두 가능합니다
    color:"red",
    fontSize:20,
    fontWeight:"700",
    //가로기준으로 글자의 위치를 결정합니다
    textAlign:"center"
  }
});
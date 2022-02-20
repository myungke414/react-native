import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, LogBox, ScrollView } from 'react-native';


//큰 함수 안에서 코드작성, 파일에 있는 함수를 밖으로 내보내다 : export
export default function App() {
  LogBox.ignoreLogs(['Warning: ...']);
  //return 밖 코드 : 함수를 만들어서 준비한다
  return (
    //return은 JSX문법으로 구성된 화면을 앱상에 보여주는 역할 : JSX문법을 화면에 그려준다는 행위, 즉 렌더링(rendering)    
    <ScrollView style={styles.container}>
      <View style={styles.subContainerOne}>
        <Text>문자는 Text 태그 사이에 작성!!</Text>
        <Text>문자는 Text 태그 사이에 작성!!</Text>
        <Text>문자는 Text 태그 사이에 작성!!</Text>
        <Text>문자는 Text 태그 사이에 작성!!</Text>
        <Text>문자는 Text 태그 사이에 작성!!</Text>
        <Text>문자는 Text 태그 사이에 작성!!</Text>
        <Text>문자는 Text 태그 사이에 작성!!</Text>
        <Text>문자는 Text 태그 사이에 작성!!</Text>
        <Text>문자는 Text 태그 사이에 작성!!</Text>
        <Text>문자는 Text 태그 사이에 작성!!</Text>
        <Text>문자는 Text 태그 사이에 작성!!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
    </ScrollView>
  );
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainerOne: {
    flex:1,
    backgroundColor:"yellow",
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    height: 100,
    borderColor : '#000',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  }
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView } from 'react-native';

export default function App() {
  //화살표 함수 형식으로 함수를 정의하고
  //jSX문법 안에서 사용할 수 있습니다
  const customAlert = () => {
    Alert.alert("JSX 밖에서 함수 구현 가능!")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>아래 버튼을 눌러주세요</Text>
        {/* 버튼 onPress 속성에 일반 함수를 연결 할 수 있습니다. */}
        <Button 
          style={styles.buttonStyle} 
          title="버튼입니다 "
          color="#f194ff" 
          onPress={function(){
            Alert.alert('팝업 알람입니다!!')
          }}
        />
        {/* ES6 문법으로 배웠던 화살표 함수로 연결 할 수도 있습니다. */}
        <Button 
            style={styles.buttonStyle} 
            title="버튼입니다 "
            color="#FF0000" 
            onPress={()=>{
              Alert.alert('팝업 알람입니다!!')
            }}
          />
          </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    height:100,
    margin:10,
  },
  textStyle: {
    textAlign:"center"
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#fff','#D1F4F6','#E5F4F5','#00CCF9']}
      style={styles.container}>
      <View style={styles.container1}>
        
      </View>
      <View style={styles.container1}>
        <Text style={{fontSize:70,fontWeight:'bold',}}>
        CODE
        </Text>
      </View>
      <View style={styles.container2}>
        <Text style={{fontWeight:'bold',fontSize:25}}>VERIFICATION</Text>
      </View>
      <View style={styles.container3}>
        <Text style={{fontWeight:'bold',fontSize:17,width:240,textAlign:'center'}}>Enter ontime password sent on ++849092605798</Text>
      </View>
      <View style={styles.container4}>
        <TextInput style={styles.input}>
        </TextInput>
        <TextInput style={styles.input}>
        </TextInput>
        <TextInput style={styles.input}>
        </TextInput>
        <TextInput style={styles.input}>
        </TextInput>
        <TextInput style={styles.input}>
        </TextInput>
        <TextInput style={styles.input}>
        </TextInput>
      </View>
      <View style={styles.container5}>
        <TouchableOpacity
          style={styles.button}>
          <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    paddingHorizontal:20,
  },
  container1: {
    flex: 1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  container2: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  },
  container3: {
    flex: 1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  container4: {
    flex: 1,
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  container5: {
    flex: 1,
    width:'100%',
  },
  input:{
    borderWidth:1,
    width:50,
    height:50,
  },
  button:{
    backgroundColor:'#E3C000',
    padding:10,
  },
});

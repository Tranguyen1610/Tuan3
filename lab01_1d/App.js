import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Image} from 'react-native';
import fb from './assets/icofacebook.png'
import zl from './assets/icozalo.png'
import gg from './assets/icogoogle.png'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <View style={styles.container}>
        <Text style={{fontWeight:'bold',fontSize:30}}>LOGIN</Text>
      </View>
      <View style={styles.container}>
        <TextInput placeholder='Email'
        style={styles.emailinput}>
        </TextInput>
      </View>
      <View style={styles.container}>
        <View style={styles.passwordinput}>
          <TextInput placeholder='Password' style={styles.password}>
          </TextInput>
          <Ionicons name='eye' size={20} style={{paddingVertical:10}}/>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text>When you agree to terms and conditions</Text>
      </View>
      <View style={styles.container}>
        <Text style={{color:'#5D25FA',fontSize:15,}}>For got your password?</Text>
      </View>
      <View style={styles.container}>
        <Text>Or login with</Text>
      </View>
      <View style={styles.containerlogin}>
        <View style={styles.fb}>
          <Image source={fb} style={{width:40,height:40}}/>
        </View>
        <View style={styles.zl}>
          <Image source={zl} style={{width:25,height:30}}/>
        </View>
        <View  style={styles.gg}>
          <Image source={gg} style={{width:35,height:35}}/>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily:'Roboto',
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor:'#D8EFDE',
    width:'100%',
    padding:10,
  },
  emailinput:{
    width:'100%',
    padding:10,
    backgroundColor:'#C9E0D0',
  },
  passwordinput:{
    width:'100%',
    flexDirection:'row',
    backgroundColor:'#C9E0D0',
  },
  password:{
    width:'90%',
    padding:10,
  },
  button:{
    backgroundColor:'#E53935',
    padding:10,
    width:'100%',
    alignItems:'center',
  },
  containerlogin:{
    flex:1,
    width:'100%',
    flexDirection:'row',
  },
  fb:{
    justifyContent:'center',
    alignItems:'center',
    height:60,
    width:'33%',
    backgroundColor:'#275A8D',
  },
  zl:{
    justifyContent:'center',
    alignItems:'center',
    height:60,
    width:'33%',
    backgroundColor:'#0680F1',
  },
  gg:{
    justifyContent:'center',
    alignItems:'center',
    height:60,
    width:'33%',
    borderColor:'#0680F1',
    borderWidth:1,
  }
});

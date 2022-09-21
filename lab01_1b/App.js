import React from 'react'
import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Ionicons from '@expo/vector-icons/Ionicons';
import lock_img from './assets/lock.png'

export default function App() {
  return (
    <LinearGradient
      colors={['#fff','#BDF6C6']}
      style={styles.container}>
        <View style={{flex:1}}>

        </View>
        <View style={{flex:1}}>
          <Image source={lock_img} style={{width:130,height:150}}/>
        </View>
        <View style={{flex:1,justifyContent:'center'}}>
          <Text style={{fontWeight:'bold',fontSize:30,width:200,textAlign:'center'}}>
          FORGET PASSWORD
          </Text>
        </View>
        <View style={{flex:1,}}>
          <Text style={{fontWeight:'bold',fontSize:17}}>
            Provide your account’s email for which you want to reset your password
          </Text>
        </View>
        <View style={styles.input}>
          <Ionicons name='mail' size={20}/>
          <TextInput
            style={{width:'100%',paddingVertical:10}}
            placeholder='Email'
            placeholderTextColor={'#000000'}
          />
        </View>
        <View style={{flex:1,width:'100%',justifyContent:'center'}}>
          <TouchableOpacity style={styles.button} >
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:17,}}>NEXT</Text>
          </TouchableOpacity> 
        </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    margin:1,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
  },
  input:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    width:'100%',
    paddingHorizontal:10,
    backgroundColor:'#C4C4C4',
  },
  button:{
    backgroundColor:'#E3C000',
    padding:15,
    with:'100%',
  },
});
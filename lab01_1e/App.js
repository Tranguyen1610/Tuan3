import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {RadioButton} from 'react-native-paper';
export default function App() {
  const [checked, setChecked] = React.useState('male');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container1}>
        <Text style={{fontWeight:'bold',fontSize:27,}}>REGISTER</Text>
      </View>
      <View style={styles.container1}>
        <TextInput placeholder='Name' style={styles.input}>
          </TextInput>
      </View>
      <View style={styles.container1}>
        <TextInput placeholder='Phone' style={styles.input}>
          </TextInput>
      </View>
      <View style={styles.container1}>
        <TextInput placeholder='Email' style={styles.input}>
          </TextInput>
      </View>
      <View style={styles.container1}>
          <View style={styles.passwordinput}>
        <TextInput placeholder='Password' style={styles.password}>
          </TextInput>
          <Ionicons name='eye' size={20} style={{paddingVertical:10}}/>
        </View>
      </View>
      <View style={styles.container1}>
        <TextInput placeholder='Birthday' style={styles.input}>
          </TextInput>
      </View>
      <View style={styles.container2}>
        <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
          <RadioButton
            value="male"
            status={ checked === 'male' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('male')}
          />
          <Text>Male</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center',marginLeft:10,}}>
          <RadioButton
          value="female"
          status={ checked === 'female' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('female')}
          />
          <Text>Female</Text>
        </View>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.button}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <Text>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:'Roboto',
    backgroundColor: '#D8EFDE',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
  },
  container1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  },
  input:{
    width:'100%',
    backgroundColor:'#C9E0D0',
    padding:10,
  },
  password:{
    width:'90%',
    padding:10,
  },
  passwordinput:{
    width:'100%',
    flexDirection:'row',
    backgroundColor:'#C9E0D0',
  },
  container2:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row',
    width:'100%',
  },
  button:{
    backgroundColor:'#C34E3B',
    padding:10,
    width:'100%',
    alignItems:'center',
  },

});

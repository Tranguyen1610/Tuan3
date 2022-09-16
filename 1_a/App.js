import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'red',
        border:' 13px solid',
        width:135,
        height:100,
        borderRadius:'100%',
      }}>
      </View>
      <View style={{flex:1,
        justifyContent:'center',
        alignItems:'center',
        }}>
        <Text style={{
          fontWeight:'bold',
          fontSize:30,
          textAlign:'center',
        }}>GROW YOUR BUSINESS</Text>
      </View>
      <View style={{flex:1}}>
        <Text
        style={{
          textAlign:'center',
          fontWeight:'bold',
          fontSize:15,
        }}>We will help you to grow your business using online server</Text>
      </View>
      <View style={{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1}}>
        <Text style={{fontWeight:'bold',fontSize:26,}}>HOW WE WORK?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    background:'linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, #28F7AC 100%)',
  },
  button:{
    width:120,
    height:50,
    textAlign:'center',
    margin:25,
    padding:15,
    backgroundColor:'#E3C000'
  },
  textbutton:{
    fontWeight:'bold',
    fontSize:16,
  }
});

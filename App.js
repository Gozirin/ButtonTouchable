import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View, Image } from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = ()=> { 
    
    
    // if (name.length > 3){
    //   SetSubmitted(!submitted);
    //  }else {
    //    Alert.alert('1. Warning Toast Message!','All input fields must be complete',
    //    [{text:'OK'},{text: 'CANCEL'}])
    // }

  //  ToastAndroid.showWithGravityAndOffset(
  //    '2. These are TOAST METHODS Warning all //input fields must be complete',
  //    ToastAndroid.LONG,
  //    ToastAndroid.BOTTOM,
  //  )
    
    SetSubmitted(!submitted);
   }

  return (

  <ScrollView>
    <View style={styles.body}>
      
      <Text style={styles.text}>
      Please write your name:
      </Text>
      <TextInput 
       multiline
       style={styles.input}
       placeholder = 'NAME:'
       onChangeText={(value) => SetName(value)}
       keyboardType= 'default'
       maxLength={5}
       //editable={false}
       />
       

  <Text style={styles.text}>
    Please write your password:
      </Text>
      <TextInput style={styles.input}
       placeholder = 'PASSWORD:'
       keyboardType= 'numeric'
       secureTextEntry
       maxLength={4}/>
  
   
   <Text style={styles.text}>
      Please write your Phone number:
      </Text>
      <TextInput style={styles.input}
       placeholder = 'PHONE NUMBER:'
       keyboardType= 'numeric'/>

   <Text style={styles.text}>
      Please write your home address:
      </Text>
      <TextInput style={styles.input}
       placeholder = 'ADDRESS:'/>

   <Text style={styles.text}>
      Please write your home date of birth:
      </Text>
      <TextInput style={styles.input}
       placeholder = 'DATE OF BIRTH:'/>


  <Text style={styles.text}>
      Please write your stack:
      </Text>
      <TextInput style={styles.input}
       placeholder = 'STACK:'/>

   <Text style={styles.text}>
      Please write your year of experience:
      </Text>
      <TextInput style={styles.input}
       placeholder = 'YEAR OF EXPERIENCE:'/>

     {/* // <Button
      // title='SUBMIT'
      // onPress={onPressHandler}
       //color = 'black'
       //disabled = {submitted}
       />  */}

       <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.9}
        underlayColor = '#dddddd'>
       
       
       <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
       </TouchableOpacity>
       
       {submitted ?

       <View>
        <Text style={styles.text}>
        "SUCCESSFUL"{}
       </Text> 
       
       <Image 
      style={styles.image}
      source={require('./assets/porche2.png')}
      resizeMode= 'stretch'/>

      </View>
       : // null
       
       <Image 
       style={styles.image}
       source={require('./assets/porche.jpg')}
       resizeMode= 'stretch'
       />
       }
      
        </View>
    </ScrollView>  
);
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 40,
    borderRadius: 50,
    
  },
  text: {
    color: '#000000',
    fontSize: 30,
    margin: 10,
    fontStyle: 'italic',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    width: 250,
    height: 55,
    backgroundColor: '#00ff00',
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
    marginTop: 20,
    margin: 10,
    borderRadius: 10,
  }
});
export default App;


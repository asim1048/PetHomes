import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Button, TextInput, Text, } from 'react-native';
import axios from 'axios';

//const ESP_IP_ADDRESS = '192.168.1.100';

const Data = () => {
  const [isLedOn, setIsLedOn] = useState(false);
  const [isTempOn,setIsTempOn]=useState(false);
  const [tempValue,setTempValue]=useState('');
  const [IP,SetIP] = useState('92.168.1.100');

  
  const waterChange= async()=>{
    var today = new Date();
    var year=today.getFullYear();
    var month=today.getMonth()+1;
    var date=today.getDate();
    console.log(year,month,date);

    var today = new Date();
   var hour=today.getHours() ;
    var min=today.getMinutes();
    min=min+1;
    console.log(hour,min);

    //year
   fetch(`http://192.168.43.251/waterYear?value=${year}`,{
      method: 'POST',
    })
    .then(response => {
      console.log(response);
      
    })
    .catch(error => {
      console.error(error);
    });

    console.log("Data send");

    //month
fetch(`http://192.168.43.251/waterMonth?value=${month}`,{
      method: 'POST',
    })
    .then(response => {
      console.log(response);
      
    })
    .catch(error => {
      console.error(error);
    });

    //date
fetch(`http://192.168.43.251/waterDate?value=${date}`,{
      method: 'POST',
    })
    .then(response => {
      console.log(response);
      
    })
    .catch(error => {
      console.error(error);
    });

    //hour
fetch(`http://192.168.43.251/waterHour?value=${hour}`,{
      method: 'POST',
    })
    .then(response => {
      console.log(response);
      
    })
    .catch(error => {
      console.error(error);
    });

    //min
    fetch(`http://192.168.43.251/waterMin?value=${min}`,{
      method: 'POST',
    })
    .then(response => {
      console.log(response);
      
    })
    .catch(error => {
      console.error(error);
    });


  }

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://192.168.43.251:8080`);
        let val = await response.text();
        setTempValue(val);
      } catch (error) {
        console.log('Error')
      }
    };

    fetchData();
  }, []);

  const toggleLed = () => {
    setIsLedOn(!isLedOn);
    fetch(`http://192.168.43.251/sendBooleanValueLight?value=${isLedOn}`,{
      method: 'POST',
    })
    .then(response => {
      console.log(response);
      
    })
    .catch(error => {
      console.error(error);
    });

  };

  const temperature = () => {
    setIsTempOn(!isTempOn);
    fetch(`http://192.168.43.251/sendBooleanValueTemperature?value=${isTempOn}`,{
      method: 'POST',
    })
    .then(response => {
      console.log(response);
      
    })
    .catch(error => {
      console.error(error);
    });

  };

  return (
    <View style={styles.container}>
        <View style={{marginTop:15}}>
      <Button 
       title={`Turn LED ${isLedOn ? 'Off' : 'On'}`} onPress={toggleLed}
      />
      <Text style={{
        marginTop:25,
        color:'black',
        fontWeight:'bold',
        fontSize:18,
      }}>Current Temperature Value: {tempValue}</Text>
      <View style={{marginTop:25}}></View>
      <Button 
       title={`Turn Temperature ${isTempOn ? 'Off' : 'On'}`} onPress={temperature}
      />
      </View>

      <View style={{marginTop:25}}></View>
      <Button 
       title={`Change Water`} onPress={waterChange}
      />


      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default Data;

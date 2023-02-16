import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Background from './../assets/Background.png';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

export default function Verification({navigation}) {
  const [value, setValue] = useState(0);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });


  return (
    <View style={{
      flex: 1,
    }}>
      <ImageBackground source={Background} style={{ flex: 1, }}>
        <View style={{ flex: 0.3 }}>

        </View>
        <View style={{
          flex: 0.68,
          borderRadius: 20,
          backgroundColor: '#006a78',
          opacity: 0.8,
          marginHorizontal: 15,
        }}>
          {/* Verification */}
          <View style={{
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
            }}>Verification</Text>
            <Text style={{
              marginTop: 10,
              fontSize: 17,
              fontWeight: 'bold',
              color: 'white',
              opacity:0.9,
            }}>Enter the Verification code</Text>
            <Text style={{
              marginTop: 10,
              fontSize: 17,
              fontWeight: 'bold',
              color: 'white',
              opacity:0.9,
            }}>We have sent you on your phone number</Text>
          </View>

          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />

          {/*Login  */}
          <View style={{
            marginTop: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 25,
          }}>
            <Text style={{
              color: '#4ba2ca',
              fontSize: 17,
            }}>Didn't received the code! ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Forget Password")}>
              <Text style={{
                color: '#000a75',
                fontSize: 18,
                fontWeight: 'bold',
                marginLeft: 5,
              }}>Resend</Text>
            </TouchableOpacity>
          </View>

                    {/*Verify */}
                    <View style={{
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 25,
          }}>
            <TouchableOpacity style={{
              width: 220,
              height: 55,
              backgroundColor: '#0eacf6',
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center'
            }}
              onPress={() => navigation.navigate("New Password")}
            >
              <Text style={{
                color: '#0c0188',
                fontSize: 19,
                fontWeight: 'bold'
              }}>Verify</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={{ flex: 0.02 }}></View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, padding: 10, marginHorizontal:15},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 30},
  cell: {
    width: 40,
    height: 40,
    color:'white',
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: 'white',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});

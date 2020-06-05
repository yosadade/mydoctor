import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILlogo} from '../../assets';
import {fonts} from '../../utils';
import {Fire} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      Fire.auth().onAuthStateChanged(user => {
        if (user) {
          // user lagi login
          console.log('user login', user);
          navigation.replace('MainApp');
        } else {
          // user logout
          navigation.replace('GetStarted');
        }
      });
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILlogo />
      <Text style={styles.title}> My Doctor </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
  },
});

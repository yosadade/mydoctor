import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILlogo} from '../../assets';

const Splash = () => {
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
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
  },
});

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? '#FFFFFF' : '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
  }),
  title: type => ({
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: type === 'secondary' ? '#112340' : '#FFFFFF',
  }),
});

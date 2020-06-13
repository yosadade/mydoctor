import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atom';

const InputChat = ({
  disable,
  value,
  onChangeText,
  onButtonPress,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <Button
        type="btn-icon-send"
        onPress={onButtonPress}
        disable={value.length < 1}
      />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    color: colors.white,
  },
  input: {
    flex: 1,
    backgroundColor: colors.disabled,
    padding: 14,
    borderRadius: 10,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
});

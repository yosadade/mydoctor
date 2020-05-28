import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Gap, Button} from '../../atom';
import {colors, fonts} from '../../../utils';

const Header = ({onPress, title, type, icon}) => {
  return (
    <View style={styles.container(type)}>
      <Button type="icon-only" icon={icon} onPress={onPress} />
      <Text style={styles.title(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  title: type => ({
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? colors.white : colors.text.primary,
  }),
});

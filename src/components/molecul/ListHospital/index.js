import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const ListHospital = ({image, title, address}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: image}} style={styles.picture} />
      <View>
        <Text style={styles.title}>Rumah Sakit</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  picture: {
    width: 80,
    height: 60,
    borderRadius: 11,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 5,
  },
});

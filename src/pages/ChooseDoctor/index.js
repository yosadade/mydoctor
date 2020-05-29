import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, List} from '../../components';
import {DummyDocter1} from '../../assets';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        icon="back-light"
        onPress={() => navigation.goBack()}
      />
      <List
        avatar={DummyDocter1}
        name="Alexander Janie"
        desc="Wanita"
        type="next"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        avatar={DummyDocter1}
        name="Alexander Janie"
        desc="Wanita"
        type="next"
      />
      <List
        avatar={DummyDocter1}
        name="Alexander Janie"
        desc="Wanita"
        type="next"
      />
      <List
        avatar={DummyDocter1}
        name="Alexander Janie"
        desc="Wanita"
        type="next"
      />
      <List
        avatar={DummyDocter1}
        name="Alexander Janie"
        desc="Wanita"
        type="next"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

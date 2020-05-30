import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Profile, List, Gap} from '../../components';
import {
  IconEditProfille,
  IconLanguage,
  IconRate,
  IconHelp,
  DummyUser,
} from '../../assets';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile
        avatar={DummyUser}
        name="Shayna Melinda"
        desc="Product Designer"
      />
      <Gap height={14} />
      <List
        icon={IconEditProfille}
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        icon={IconLanguage}
        name="Language"
        desc="Available 12 languages"
        type="next"
      />
      <List
        icon={IconRate}
        name="Give Us Rate"
        desc="On Google Play Store"
        type="next"
      />
      <List
        icon={IconHelp}
        name="Help Center"
        desc="Read our guideines"
        type="next"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Profile, List, Gap} from '../../components';
import {IconEditProfille, IconLanguage, IconRate, IconHelp} from '../../assets';
import {colors} from '../../utils';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Header title="Profile" />
      <Gap height={10} />
      <Profile />
      <Gap height={14} />
      <List
        icon={IconEditProfille}
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
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

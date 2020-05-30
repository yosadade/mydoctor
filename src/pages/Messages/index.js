import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {List} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyDocter1, DummyDocter2, DummyDocter3} from '../../assets';

const Messages = ({navigation}) => {
  const [doctors] = useState([
    {
      id: 1,
      avatar: DummyDocter1,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terima kasih banyak atas wak...',
    },
    {
      id: 2,
      avatar: DummyDocter2,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      avatar: DummyDocter3,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(item => {
          return (
            <List
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              desc={item.desc}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 39,
    paddingHorizontal: 20,
  },
});

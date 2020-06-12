import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {fonts, colors, getData, showError} from '../../utils';
import {Fire} from '../../config';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  const [chatContent, setChatConent] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    getData('user').then(res => {
      setUser(res);
    });
  });

  const chatSend = () => {
    setChatConent('');
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const year = today.getFullYear();
    const mount = today.getMonth() + 1;
    const date = today.getDate();

    const data = {
      sendBy: user.uid,
      chatDate: new Date().getTime(),
      chatTime: `${hour}:${minutes} ${hour > 12 ? 'PM' : 'AM'}`,
      chatContent: chatContent,
    };
    console.log('data untuk dikirim :', data);
    console.log(
      'url firebase',
      `chatting/${user.uid}_${
        dataDoctor.data.uid
      }/allChat/${year}-${mount}-${date}`,
    );
    // kirim ke firebase
    Fire.database()
      .ref(
        `chatting/${user.uid}_${
          dataDoctor.data.uid
        }/allChat/${year}-${mount}-${date}`,
      )
      .push(data)
      .then(() => {
        setChatConent('');
      })
      .catch(err => {
        showError(err.message);
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title={dataDoctor.data.fullName}
        desc={dataDoctor.data.category}
        photo={{uri: dataDoctor.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
          <ChatItem isMe />
          <ChatItem />
          <ChatItem isMe />
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={value => setChatConent(value)}
        onButtonPress={chatSend}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});

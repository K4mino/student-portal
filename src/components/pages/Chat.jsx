import React,{useContext} from 'react';
import styled from 'styled-components';
import {BsFillTelephoneFill,BsCameraVideoFill,BsPersonPlusFill} from 'react-icons/bs';
import {IoMdSend} from 'react-icons/io';
import { Input as AntdInput} from 'antd';
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { useState } from 'react';

import { ChatContext } from '../../context/ChatContext';
import {Chats,Messages} from '../organisms';
import {Text,Box} from '../atoms';
import colors from '../constants/colors';
import spacings from '../constants/spacings';
import Layout from '../Layout';
import profileImg from '../../images/profile.png';
import { AuthContext } from '../../context/AuthContext';
import { db } from '../../firebase';

const Wrapper = styled.div`
    width:100%;
    height:80vh;
    display:flex;
    justify-content:space-between;
    gap:1rem;
    padding: 0 ${spacings.medium};
`;
const OpenedDialog = styled.div`
    width:71%;
    height:100%;
    background-color:${colors.boxBackground.firstColor};
    border-radius:32px;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    padding-bottom:20px;
`;

const OpenedDialogTitle = styled.div`
    position:absolute;
    top:20px;
    display:flex;
    width:100%;
    align-items:center;
    justify-content:space-between;
`;

const MessageInput = styled(AntdInput)`
    width:90%;
    padding:10px 30px;
    border-radius:24px;
    border:none;
    outline:none;
    font-size:0.7rem;
    color:#7C7B7B;
    order:10;
`;

const StyledSendIcon = styled(IoMdSend)`
    position:absolute;
    bottom:31px;
    right:6%;
    color:#9EA6C2;
`;

const Chat = () => {
  const {data} = useContext(ChatContext);
  const {currentUser} = useContext(AuthContext);
  const [text,setText] = useState('');

  const handleSend = async() => {
    await updateDoc(doc(db,'chats',data.chatId),{
      messages:arrayUnion({
        id:new Date(),
        text,
        senderId:currentUser.uid,
        date:Timestamp.now()
      })
    });

    await updateDoc(doc(db,'userChats',currentUser.uid),{
      [data.chatId+'.lastMessage']:{
        text
      },
      [data.chatId+'.date']:serverTimestamp()
    });
    await updateDoc(doc(db,'userChats',data.user.uid),{
      [data.chatId+'.lastMessage']:{
        text
      },
      [data.chatId+'.date']:serverTimestamp()
    });

    setText('');
  };

  return (
    <Layout pageTitle='Чаты'>
      <Wrapper>
        <Chats/>
        <OpenedDialog>
          <OpenedDialogTitle>
            <Box
              gap='1rem'
              flexDirection='row'>
              <img src={profileImg}/>
              <Text
                fontWeight='600'
                fontSize='0.8rem'>
                {data.user?.email}
              </Text>
            </Box>
            <Box
              gap='1rem'
              flexDirection='row'>
              <BsFillTelephoneFill color='#9EA6C2'/>
              <BsCameraVideoFill color='#9EA6C2'/>
              <BsPersonPlusFill color='#9EA6C2'/>
            </Box>
          </OpenedDialogTitle>
          <MessageInput
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Ваше сообщение'
          />
          <StyledSendIcon onClick={handleSend}/>
          <Messages/>
        </OpenedDialog>
      </Wrapper>
    </Layout>
  );
};

export default Chat;
import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { useState } from 'react';
import { onSnapshot,doc } from 'firebase/firestore';
import { useRef } from 'react';
import { useEffect } from 'react';

import { db } from '../../firebase';
import { ChatContext } from '../../context/ChatContext';
import profileImg from '../../images/profile.png';
import { AuthContext } from '../../context/AuthContext';

const Wrapper = styled.div`
    padding: 10px;
    height: calc(100% - 160px);
    overflow-y: scroll;
    width:90%;

    ::-webkit-scrollbar-track{
      background:#fff;
    }
  
    ::-webkit-scrollbar {
      width: 5px;
    }
  
    ::-webkit-scrollbar-thumb {
      background: #A7AFD0; 
      border-radius:10px;
    }
`;

const Message = styled.div`
  display:flex;
  gap:1rem;
  padding:10px;

  & img {
    width:40px;
    height:40px;
  }

  ${({$partner}) => $partner && 'flex-direction:row-reverse;'}
`;

const MessageContent = styled.div`
    background-color:#333A52;
    padding:10px;
    max-width:340px;
    height:auto;
    color:#fff;
    font-size:0.6rem;
    border-radius:12px;
    max-width:80%;

    ${({$partner}) => $partner && ' background-color:#fff;color:#000;'}
`;

const Messages = () => {
  const {data} = useContext(ChatContext);
  const {currentUser} = useContext(AuthContext);
  const [messages,setMessages] = useState([]);
  const ref = useRef();

  useEffect(()=>{
    ref.current?.scrollIntoView({behavior:'smooth'}); 
  },[messages]);
  
  useEffect(() => {
    const unsub = onSnapshot(doc(db,'chats',data.chatId),(doc) =>{
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  },[data.chatId]);

  return (
    <Wrapper>
      {messages?.map((message) => (
        <Message
          ref={ref}
          key={message.id}
          $partner={message.senderId === currentUser.uid}>
          <img src={profileImg}/>
          <MessageContent
            $partner={message.senderId !== currentUser.uid}>
            {message.text}
          </MessageContent>
        </Message>
      ))}
    </Wrapper>
  );
};

export {Messages};
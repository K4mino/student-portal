import React,{useState,useContext, useEffect} from 'react';
import styled from 'styled-components';
import { Input as AntdInput} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {BsPencilSquare} from 'react-icons/bs';
import {collection,getDocs,getDoc,query,where,doc,setDoc, updateDoc, serverTimestamp,onSnapshot} from 'firebase/firestore';

import { AuthContext } from '../../context/AuthContext';
import { db } from '../../firebase';
import {Text,Box} from '../atoms';
import colors from '../constants/colors';
import spacings from '../constants/spacings';
import profileImg from '../../images/profile.png';
import { ChatContext } from '../../context/ChatContext';

const Wrapper = styled.div`
    width:25%;
    display:flex;
    flex-direction:column;
    gap:1rem;
`;

const Searchbar = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:1rem;
`;

const Input = styled(AntdInput)`
    background-color:${colors.boxBackground.firstColor};
    outline:none;
    border:none;
    border-radius:20px;
    
`;

const Pencil = styled(BsPencilSquare)`
    color:#6FA7C5;
    font-size:1.5rem;
`;

const DialogList = styled.div`
    background-color:${colors.boxBackground.firstColor};
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    border-radius:32px;
    width:100%;
    padding:${spacings.small};
`;

const Dialog = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:0.5rem;
    border-bottom:1px solid grey;
    width:100%;
    cursor:pointer;

    & img{
        max-width:51px;
        max-height:51px;
    }

    &:last-child{
      border:none;
    }
`;

const Chats = () => {
  const [userName,setUserName] = useState('');
  const [user,setUser] = useState(null);
  const {currentUser}= useContext(AuthContext);
  const [chats,setChats] = useState([]);
  const {dispatch} = useContext(ChatContext);


  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db,'userChats',currentUser.uid), (doc)=> {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  },[currentUser.uid]);
  
  const handleSearch = async() => {
    const q = query(collection(db,'users'),where('email','==',userName));
  
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleKey = (e) => {
    e.code == 'Enter' && handleSearch();
  };
  
  const handleSelect = async(u) => {
    const combinedId = currentUser.uid > u.uid ? currentUser.uid + u.uid : u.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db,'chats',combinedId));
      dispatch({type:'CHANGE_USER',payload:u});
      if(!res.exists()){
        await setDoc(doc(db,'chats',combinedId),{messages:[]});
  
        await updateDoc(doc(db,'userChats',currentUser.uid),{
          [combinedId+'.userInfo']:{
            uid:user.uid,
            email:user.email,
          },
          [combinedId+'.date']:serverTimestamp()
        });
  
        await updateDoc(doc(db,'userChats',user.uid),{
          [combinedId+'.userInfo']:{
            uid:currentUser.uid,
            email:currentUser.email,
          },
          [combinedId+'.date']:serverTimestamp()
        });

     
      }
    } catch (error) {
      console.log(error);
    }
  
    setUser(null);
    setUserName('');
  };

  return (
    <Wrapper>
      <Searchbar>
        <Input
          onKeyDown={handleKey}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          prefix={<SearchOutlined  color='#76B0CF'/>}
          placeholder='Поиск...'/>
        <Pencil/>
      </Searchbar>
      <DialogList>
        {user && <Dialog onClick={() => handleSelect(user)}>
          <img src={profileImg}/>
          <Box
            gap='0.2rem'
            alignItems='flex-start'>
            <Text
              fontSize='0.6rem'>
              {user.email}
            </Text>
            <Text
              width='100%'
              textAlign='left'
              fontSize='0.5rem'>
                  Loremsaiasdm asdsdq 
            </Text>
          </Box>
        </Dialog>}
        {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
          <Dialog
            key={chat[0]}
            onClick={()=>handleSelect(chat[1].userInfo)}>
            <img src={profileImg}/>
            <Box
              gap='0.2rem'
              alignItems='flex-start'>
              <Text
                fontSize='0.6rem'>
                {chat[1].userInfo.email}
              </Text>
              <Text
                width='100%'
                textAlign='left'
                fontSize='0.5rem'>
                {chat[1]?.lastMessage?.text}
              </Text>
            </Box>
          </Dialog>
        ))}
      </DialogList>
    </Wrapper>
  );
};

export {Chats};
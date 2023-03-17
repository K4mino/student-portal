import React from 'react';
import styled from 'styled-components';
import {BsPencilSquare,BsFillTelephoneFill,BsCameraVideoFill,BsPersonPlusFill} from 'react-icons/bs';
import {IoMdSend} from 'react-icons/io';
import { Input as AntdInput} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

import {Text,Box} from '../atoms';
import colors from '../constants/colors';
import spacings from '../constants/spacings';
import Layout from '../Layout';
import profileImg from '../../images/profile.png';


const Wrapper = styled.div`
    width:100%;
    height:80vh;
    display:flex;
    justify-content:space-between;
    gap:1rem;
    padding: 0 ${spacings.medium};
`;

const Chats = styled.div`
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
    justify-content:space-between;
    align-items:center;
    gap:0.5rem;

    & img{
        max-width:51px;
        max-height:51px;
    }
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

const YourMessage = styled.div`
    background-color:#333A52;
    padding:15px;
    max-width:340px;
    height:auto;
    color:#fff;
    font-size:0.6rem;
    border-radius:12px;
`;

const PartnerMessage = styled.div`
    padding:15px;
    max-width:340px;
    height:auto;
    color:#000000;
    background-color:#fff;
    font-size:0.6rem;
    border-radius:12px;
`;

const MessageWrapper = styled(Box)`
    width:95%;
    flex-direction:row;
    align-items:flex-end;
    gap:0.5rem;
`;

const dialogs = [
  {
    id:1,
    img:profileImg,
    name:'Name Surname',
    text:'Loremsaiasdm asdsdq asdawdqw asdasdqw asd asd'
  },
  {
    id:2,
    img:profileImg,
    name:'Name Surname',
    text:'Loremsaiasdm asdsdq asdawdqw asdasdqw asd asd'
  },
  {
    id:3,
    img:profileImg,
    name:'Name Surname',
    text:'Loremsaiasdm asdsdq asdawdqw asdasdqw asd asd'
  },
  {
    id:4,
    img:profileImg,
    name:'Name Surname',
    text:'Loremsaiasdm asdsdq asdawdqw asdasdqw asd asd'
  }
];

const Chat = () => {
  return (
    <Layout pageTitle='Чаты'>
      <Wrapper>
        <Chats>
          <Searchbar>
            <Input
              prefix={<SearchOutlined  color='#76B0CF'/>}
              placeholder='Поиск...'/>
            <Pencil/>
          </Searchbar>
          <DialogList>
            {
              dialogs.map((dialog) => (
                <Dialog key={dialog.id}>
                  <img src={dialog.img}/>
                  <Box
                    gap='0.2rem'
                    alignItems='flex-start'>
                    <Text
                      fontSize='0.6rem'>
                      {dialog.name}</Text>
                    <Text
                      textAlign='left'
                      fontSize='0.5rem'>
                      {dialog.text}</Text>
                  </Box>
                </Dialog>
              ))
            }
          </DialogList>
        </Chats>
        <OpenedDialog>
          <OpenedDialogTitle>
            <Box
              gap='1rem'
              flexDirection='row'>
              <img src={profileImg}/>
              <Text
                fontWeight='600'
                fontSize='0.8rem'>
                Name Surname</Text>
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
            placeholder='Ваше сообщение'
          />
          <StyledSendIcon/>
          <MessageWrapper
            justifyContent='flex-start'>
            <img src={profileImg}/>
            <PartnerMessage>
            Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus 
            </PartnerMessage>
          </MessageWrapper>
          <MessageWrapper
            justifyContent='flex-end'>
            <YourMessage>
              Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices.
            </YourMessage>
            <img src={profileImg}/>
          </MessageWrapper>
        </OpenedDialog>
      </Wrapper>
    </Layout>
  );
};

export default Chat;
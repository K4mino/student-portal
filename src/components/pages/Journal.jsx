import React from 'react';
import styled from 'styled-components';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Layout from '../Layout';
import { useContext } from 'react';
import { useState,useEffect } from 'react';
import { getDoc,doc } from 'firebase/firestore';

import {db} from '../../firebase';
import { Box,Text } from '../atoms';
import { AuthContext } from '../../context/AuthContext';

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    gap:1rem;
    width:100%;
`;

const Card = styled.div`
    border-radius:23px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:1rem;
`;

const Grades = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    width:100%;
    gap:10px;
`;
const Grade = styled.div`
    background-color:#F0F3FF;
    border-radius:13px;
    padding:24px;
`;

const CardText = styled(Text)`
    text-align:left;
    width:100%;
    font-size:0.8rem;
`;

const ChartWrapper = styled.div`
    width:93px;
    height:93px;
`;

const Journal = () => {
  const {currentUser} = useContext(AuthContext);
  const [grades,setGrades] = useState([]);
  useEffect(() => {
    const getData = async() => {
      try {
        const res = await getDoc(doc(db,'users',currentUser.uid));
        const userData = await res.data();
        setGrades(userData?.grades);
      } catch (error) {
        console.log(error);
      }
    };
    currentUser.uid && getData();
  },[currentUser.uid]);

  return (
    <Layout pageTitle='Журнал'>
      <Wrapper>
        {
          grades.map((item) => (
            <Card key={item.subject}>
              <Box
                flexDirection='row'
                justifyContent='flex-start'>
                <ChartWrapper>
                  <CircularProgressbar
                    styles={buildStyles({pathColor:'#2E5BF0',textColor:'#000'})}
                    value={item.final}
                    text={`${item.final}%`}/>
                </ChartWrapper>
                <Box>
                  <CardText fontWeight='600'>{item.subject}</CardText>
                  <CardText>John D.</CardText>
                </Box>
              </Box>
              <Grades>
                <Grade>
                  <Box padding='0'>
                    <Text>{item.midterm}</Text>
                    <Text
                      color='#7C829B'
                      fontSize='0.6rem'>
                        РК 1
                    </Text>
                  </Box>
                </Grade>
                <Grade>
                  <Box padding='0'>
                    <Text>{item.endterm}</Text>
                    <Text
                      color='#7C829B'
                      fontSize='0.6rem'>
                        РК 2
                    </Text>
                  </Box>
                </Grade>
                <Grade>
                  <Box padding='0'>
                    <Text>{item.avg}</Text>
                    <Text
                      color='#7C829B'
                      fontSize='0.6rem'>
                        РК СРД
                    </Text>
                  </Box>
                </Grade>
                <Grade>
                  <Box padding='0'>
                    <Text>{item.final}</Text>
                    <Text
                      color='#7C829B'
                      fontSize='0.6rem'>
                        Экзамен
                    </Text>
                  </Box>
                </Grade>
              </Grades>
            </Card>
          ))
        }
      </Wrapper>
    </Layout>
  );
};

export default Journal;
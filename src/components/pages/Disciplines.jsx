import React from 'react';
import styled from 'styled-components';
import { useState,useEffect,useContext } from 'react';
import { getDoc,doc} from 'firebase/firestore';

import {db} from '../../firebase';
import { AuthContext } from '../../context/AuthContext';
import { DisciplineCard } from '../organisms';
import Layout from '../Layout';

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:1rem;
    width:100%;

    @media(max-width:660px){
      &{
        grid-template-columns:1fr;
      }
    }
`;


const Disciplines = () => {
  const {currentUser} = useContext(AuthContext);
  const [disciplines,setDisciplines] = useState([]);
  const [role,setRole] = useState('');

  useEffect(() => {
    const getData = async() => {
      try {
        const res = await getDoc(doc(db,'users',currentUser.uid));
        const userData = await res.data();
        let list = [];
        for (const item of userData.lessons){
          const path = item.path;
          const lessonId = path.split('/').pop();
          const lesson = await getDoc(doc(db,'lessons',lessonId));
          list.push(lesson.data());
        }
        setDisciplines(list);
        setRole(userData.role);
      } catch (error) {
        console.log(error);
      }
    };
    currentUser.uid && getData();
  },[currentUser.uid]);

  return (
    <Layout pageTitle='Дисциплины'>
      <Wrapper>
        {
          role == 'student' && 
            <>
              {
                disciplines.map((discipline,i) => (
                  <DisciplineCard
                    id={i}
                    key={discipline.name}
                    title={discipline.name}/>
                ))
              }
            </>
        }
        {
          role == 'teacher' && 
          <>
            {
              disciplines.map((discipline,i) => (
                <DisciplineCard
                  id={i}
                  key={discipline.name}
                  title={discipline.name}/>
              ))
            }
          </>
        }
      </Wrapper>
    </Layout>
  );
};

export default Disciplines;
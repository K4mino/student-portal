import React from 'react';
import styled from 'styled-components';
import { useState,useEffect,useContext } from 'react';
import { getDoc,doc } from 'firebase/firestore';

import {db} from '../../firebase';
import { AuthContext } from '../../context/AuthContext';
import { DisciplineCard } from '../organisms';

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

const TeacherDisciplines = () => {
  const {currentUser} = useContext(AuthContext);
  const [disciplines,setDisciplines] = useState([]);
  useEffect(() => {
    const getData = async() => {
      try {
        const res = await getDoc(doc(db,'users',currentUser.uid));
        const userData = await res.data();
        setDisciplines(userData?.lessons);
      } catch (error) {
        console.log(error);
      }
    };
    currentUser.uid && getData();
  },[currentUser.uid]);

  return (
    <Wrapper>
      {
        disciplines.map((discipline,i) => (
          <DisciplineCard
            id={i}
            key={discipline.name}
            title={discipline.name}/>
        ))
      }
    </Wrapper>
  );
};

export default TeacherDisciplines;
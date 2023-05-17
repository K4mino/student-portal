import React from 'react';
import styled from 'styled-components';
import TechnologyCard from './TechnologyCard';

const Wrapper = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
    padding-top:20px;
    gap:1rem;
`;

const technologies = [
  {
    id:1,
    title:'Intellij idea',
    src:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1200px-IntelliJ_IDEA_Icon.svg.png'
  },
  {
    id:2,
    title:'PyCharm',
    src:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PyCharm_Icon.svg/1200px-PyCharm_Icon.svg.png'
  },
  {
    id:3,
    title:'Web Storm',
    src:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/WebStorm_Icon.svg/1200px-WebStorm_Icon.svg.png'
  },
];

const TechnologyList = () => {
  return (
    <Wrapper>
      {
        technologies.map((item) => (
          <TechnologyCard key={item.id}
            title={item.title}
            link={item.link}
            imgLink={item.src}/>
        ))
      }
    </Wrapper>
  );
};

export default TechnologyList;
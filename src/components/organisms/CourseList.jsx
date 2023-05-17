import React from 'react';
import styled from 'styled-components';
import CourseCard from './CourseCard';

const Wrapper = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
    padding-top:20px;
    gap:1rem;
`;

const courses = [
  {
    id:1,
    src:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/08/33f720502a11e59e72391aa537f5c9/pythonlearn_thumbnail_1x1.png?auto=format%2Ccompress&dpr=1',
    title:'Programming for Everybody (Getting Started with Python)',
    subtitle:'University of Michigan',
    link:'https://www.coursera.org/programs/computer-engineering-and-information-security-csse-bachelors-knhpn?collectionId=HNoEd&currentTab=CATALOG&productId=7A1yFTaREeWWBQrVFXqd1w&productType=course&showMiniModal=true'
  },
  {
    id:2,
    src:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/44/2959b0502911e5851f058ad6ebf936/pythondata_thumbnail_1x1.png?auto=format%2Ccompress&dpr=1',
    title:'Python Data Structures',
    subtitle:'University of Michigan',
    link:'https://www.coursera.org/programs/computer-engineering-and-information-security-csse-bachelors-knhpn?collectionId=HNoEd&currentTab=CATALOG&productId=P--h6zpNEeWYbg7p2_3OHQ&productType=course&showMiniModal=true'
  },
  {
    id:3,
    src:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/53/01bee0502a11e58ddc8ff4d6e0523a/pythonnetworkdata_thumbnail_1x1.png?auto=format%2Ccompress&dpr=1',
    title:'Using python to access Web Data',
    subtitle:'University of Michigan',
    link:'https://www.coursera.org/programs/computer-engineering-and-information-security-csse-bachelors-knhpn?collectionId=HNoEd&currentTab=CATALOG&productId=Y4DUPDpQEeWO-Qq6rEZAow&productType=course&showMiniModal=true'
  }
];

const CourseList = () => {
  return (
    <Wrapper>
      {
        courses.map((course) => (
          <CourseCard 
            key={course.id}
            imgLink={course.src}
            title={course.title}
            subtitle={course.subtitle}
            link={course.link}/>
        ))
      }
    </Wrapper>
  );
};

export default CourseList;
import React from 'react';
import { Tabs } from 'antd';

import { BookList } from '../organisms';
import Layout from '../Layout';
import CourseList from '../organisms/CourseList';
import TechnologyList from '../organisms/TechnologyList';

const items = [
  {
    key:1,
    label:'Книги',
    children:<BookList/>
  },
  {
    key:2,
    label:'Курсы',
    children:<CourseList/>
  },
  {
    key:3,
    label:'Технологии',
    children:<TechnologyList/>
  }
];

const Library = () => {
  return (
    <Layout pageTitle='Библиотека'
      shouldShowSearch={false}>
      <Tabs className='library__tabs'
        items={items}/>
    </Layout>
  );
};

export default Library;
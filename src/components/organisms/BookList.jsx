import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Book } from './Book';

const Wrapper = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
    padding-top:20px;
    gap:1rem;
`;


const BookList = () => {
  const [bookCategory,setBookCategory] = useState('computer science');
  const [bookList,setBookList] = useState([]);

  useEffect(()=> {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookCategory}`)
      .then((res) => { return setBookList(res.data.items);})
      .catch((err) => console.log(err));

  },[bookCategory]);
  return (
    <>
      <Input value={bookCategory}
        onChange={(e) => setBookCategory(e.target.value)}/>
      <Wrapper>
        {
          bookList.map((book) => (
            <Book key={book.id}
              title={book.volumeInfo.title}
              imgLink={book?.volumeInfo.imageLinks?.smallThumbnail}
              previewLink={book.volumeInfo.previewLink}/>
          ))
        }
      </Wrapper>
    </>
  );
};

export  {BookList};
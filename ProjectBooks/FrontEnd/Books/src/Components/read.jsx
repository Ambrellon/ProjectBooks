import axios from 'axios';
import { useEffect, useState } from 'react';

function Read() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      const res = await axios.get('http://localhost:3000/books/getAll');
      setBooks(res.data);
    };
    getBook();
  });
  return (
    <>
      {books.map(({ title, genre, price }) => (
        <>
          <p>{title}</p>
          <p>{genre}</p>
          <p>{`${price}`}</p>
        </>
      ))}
    </>
  );
}

export default Read;
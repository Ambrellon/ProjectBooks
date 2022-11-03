import axios from 'axios';
import { useState } from 'react';

function Create() {
  const [bookTitle, setBookTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/addBook', {
      bookTitle,genre,price,
    });

    console.log('CREATED:', res.data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Title">
        Book Title:
        <input type="text" id="title" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} required />
      </label>
      <br />
      <label htmlFor="Genre">
        Genre of book:
        <input type="text" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        </label>
      <br />
      <label htmlFor="Price">
        Price:
        <input type="number" id="price" min={0} max={100} step="1" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Create;
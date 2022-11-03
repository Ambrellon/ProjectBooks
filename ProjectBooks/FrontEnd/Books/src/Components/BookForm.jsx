import axios from 'axios';
import { useState } from 'react';

function Create() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/books/createCharacter', {
      title, genre, price,
    });

    console.log('CREATED:', res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      
        <h1> Books Books Books!</h1>
        <img
          src="https://https://images.squarehttps://i.pinimg.com/736x/4a/87/c0/4a87c0272eafea9a7ff630c50711718d.jpgspace-cdn.com/content/v1/5c6ddc644d546e70437481eb/1589404880277-FJT6G1YSMTAE02VP24MR/Stunning-Original-Art.jpg?format=1500w"></img>
        <br/>
        <br/>
        <p></p>

        <label htmlFor="Title">Book Title:
          <input type="text" id="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <br/>
        <p></p>

        <label htmlFor="Genre">Genre:
          <input type="text" id="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        </label>
        <br/>
        <p></p>
        <label htmlFor="Price">Price:
          <input type="number" id="Price" min={0} max={100} step="1" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>
        <br/>
        <br/>
        <input type="submit" value="Submit"></input>
      
    </form>
  )
}

export default Create;
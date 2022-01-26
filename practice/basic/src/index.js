import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// JSX
// return single Element
// wrap with a wrapper : div/ section / article/ or Fragment
// camelCase for html attribute
// use () for formatting 


//1. normal function
// function Greeting(){
//   return <h4>Greetings</h4>;
// }

//2. arrow function
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello')
// }



// function Greeting(){
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>John Doe</h2>
// const Message = () => <p>This is the message</p>


// const author =  'Eric Carle';
// const title = 'Brown Bear';
// const img = 'https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._AC_SX184_.jpg' ;



// create an object
// const firstBook = {
//   author:  'Eric Carle',
//   title : 'Brown Bear',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._AC_SX184_.jpg' 
// }

// const secondBook = {
//   author:  'EEEEEE',
//   title: 'BBBBBBB',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._AC_SX184_.jpg' 
// }


// function BookList(){
//   return(
//     <section className='booklist'>
//       <Book 
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
        
//       />
//       <Book 
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }


// const Book =(props) => {
//   // console.log(props);
//   // 1 destructure
//   const {img, author, title, children} = props
//   // 2 destructure in the parameter cont Book = ({img, title, author}) => {...}
//   return(
//     <article className='book'>
//       <img 
//       src={img} // src={img} for destructure
//       alt=''
//       />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       <p>{children}</p>
//     </article>

//   );
// }

// const Image = () => {
//   return <img src='https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._AC_SX184_.jpg' alt=''/>
// }

// const Title = () => <h1>Brwon Bear</h1>
// const Author = () => <h4>Eric Carle</h4>
// const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>Eric Carle</h4>


//========================================================
// access book array


// =====iterate the array
// const names = ['John', 'Sue', 'Peter'];
// // const newNames = names.map((name =>{
// //   console.log(name);
// // }))
// const newNames = names.map((name) =>{
//   return <h1>{name}</h1>
// });
// // console.log(newNames);
// function BookList(){
//   return(
//     <section className='booklist'>
//       {newNames}
//     </section>
//   );
// }

//==============Props==========================
// const books = [
//   {
//     author:  'Eric Carle',
//     title : 'Brown Bear',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._AC_SX184_.jpg' 
//   },
//   {
//     author:  'Eric Carle',
//     title: 'The Very Hungry Caterpillar',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/41w4B0f21VL._AC_SX184_.jpg' 
//   },
//   {
//     author:  'Seuss',
//     title: 'Dr. Seuss Beginner Book Collection',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/51PWDGLykIL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg' 
//   }

// ];

// function BookList(){
//   return(
//     <section className='booklist'>
//       {books.map((book) =>{
//         return (
//           //spread out all the props in book using ...book
//           <Book key={book.id} {...book}></Book> // method 1
//           // <Book key={book.id} book={book}></Book> // method 2
//           // <div>
//           //   <h3>{title}</h3>
//           //   <h6>{author}</h6>
//           // </div>
//         );
//         // console.log(book);
//         // return 'hello';
//       })}
//     </section>
//   );
// }


// const Book =(props) => {
//   const {img, title, author} = props; // method 1
//   // const {img, author, title} = props.book; // method 2
//   return(
//     <article className='book'>
//       <img 
//       src={img}
//       alt=''
//       />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>

//   );
// }


//=============Event=======================
import {books} from './books';
import Book from './Book';

function BookList(){
  return(
    <section className='booklist'>
      {books.map((book) =>{
        return (
          <Book key={book.id} {...book}></Book> 
        );
      })}
    </section>
  );
}



ReactDOM.render(<BookList />, document.getElementById('root'));



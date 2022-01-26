

const Book =(props) => {
    const {img, title, author} = props;
  
    const clickHandler = (e) => {
      alert('heloooo');
      console.log(e);
      console.log(e.target);
    }
  
    return(
      <article className='book'>
        <img 
        src={img}
        alt=''
        />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={clickHandler}>Example</button>
      </article>
  
    );
  }

  export default Book;
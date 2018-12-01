import React from 'react';
import {ThemeContext, themes} from './context'

class Books extends React.Component {
  state = {
      authors: [],
      books: []
    }

    async componentDidMount() {
      const result = await fetch('http://localhost:3000/api/v1/books');
      const books = await result.json();
      this.setState({ books, loaded: true });
    };

 
  render() {
    let props = this.props;
    let theme = this.context;
    const { books } = this.state;  
      return (
        <React.Fragment>  
            <table  {...props} style={{backgroundColor: theme.background}}>
            <tr> 
                <th class='tbb'>ID</th>
                <th class='tbb'>Author</th>
                <th class='tbb'>Title</th> 
                <th class='tbb'>Rating</th>
            </tr>
            {books.map(book => (
             <React.Fragment>
             <tr key={book.id}>
                <td class='tbb'>{book.id}</td>
                <td class='tbb'>{book.author_id}</td>
                <td class='tbb'>{book.title}</td>
                <td class='tbb'>{book.rating}</td>
             </tr>
             </React.Fragment>
            ))}
            </table>
        </React.Fragment>
);
}
}
Books.contextType = ThemeContext;
export default Books;    
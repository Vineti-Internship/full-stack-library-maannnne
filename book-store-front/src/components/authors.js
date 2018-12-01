import React from 'react';
import {ThemeContext, themes} from './context'

class Authors extends React.Component {
  state = {
      authors: [],
      books: []
    }

    async componentDidMount() {
      const result = await fetch('http://localhost:3000/api/v1/authors');
      const authors = await result.json();
      this.setState({ authors, loaded: true });
    };

  
// render(){
//   let props = this.props;
//   //let theme = this.context;
//   const { authors } = this.state;
//   return (
//     <div {...props} style={{backgroundColor: themes.background}}>
//       {authors.map(author => (
//         <div key={author.id}>
//           <h1>{author.fullName}</h1>
//           <p>{author.age}</p>
//         </div>
//       ))}
//     </div>
//   )
// }




  render() {
    let props = this.props;
    //let theme = this.context;
    const { authors } = this.state;  
      return (
        <React.Fragment {...props} style={{backgroundColor: themes.background}}>  
            <table>
            <tr> 
                <th class='tbb'>ID</th>
                <th class='tbb'>Author</th> 
                <th class='tbb'>Age</th>
            </tr>
            {authors.map(author => (
             <React.Fragment key={author.id}>
             <tr>
                <td class='tbb'>{author.id}</td>
                <td class='tbb'>{author.fullName}</td>
                <td class='tbb'>{author.age}</td>
             </tr>
             </React.Fragment>

            ))}
            </table>
        </React.Fragment>
);
}
}
Authors.contextType = ThemeContext;
export default Authors;    
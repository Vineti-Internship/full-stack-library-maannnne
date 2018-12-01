import React from 'react';

class Authors extends React.Component {
  state = {
      authors: [],
      books:[]
    }


    async componentDidMount(){this.fetchAuthors();}
    fetchAuthors = async() => {
      const result = await fetch('http://localhost:3000/api/v1/authors');
      this.setState({authors: await result.json(),loaded:true})
  };

  render(){
    const {authors} = this.state;
    return(
      {
        authors.map()(
          author => (
            <div key={author.id}>
              <h1>{author.fullName}</h1>
              <p>{author.age}</p>
            </div>
          )
        )
      }
    );
  }
}

export default Authors;    
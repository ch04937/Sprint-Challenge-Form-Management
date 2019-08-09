import React from 'react';

class Contact extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props.contact)
    return (
      <div>
        <p>Here are some of our members</p>
      {this.props.addContact.name}
      </div>
    );
  }
}

export default Contact;

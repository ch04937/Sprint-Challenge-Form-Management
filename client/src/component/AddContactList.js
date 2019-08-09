import React from 'react';
import Contact from './Contact'

// import Todo from './Todo.js';

class AddContactList extends React.Component {
  render() {
    console.log('addcontactlist', this.props)
    return (
      <div >
        {this.props.addContacts.map(addContact => <Contact 
                                        key={addContact.id} 
                                        addContact={addContact} 
                                        />)}
      </div>
    );
  }
}

export default AddContactList;

import React from 'react'
import AddContactList from './AddContactList'
import FormikRegistrationForm from './FormikRegistrationForm'


const addContactData = [
    {
        name: 'carlos',
        id: 1,
        registered: true
    }
]

class AddContact extends React.Component {
    constructor(){
        super();
        this.state = {
            addContacts: addContactData
        };
    }
    addContact = name => {
        this.setState({
            addContacts: [...this.state.addContacts, {
            name: name,
            id: Date.now(),
            registered: true
          }]
        });
      };
    render() {
        console.log(this.state)
        return(
            <div>
                <h2>Welcome to the family</h2>
                <AddContactList 
                    addContacts={this.state.addContacts}
                    />
                <FormikRegistrationForm 
                    addContact={this.addContact}
                    />

            </div>
        )
    }
    
}

export default AddContact;

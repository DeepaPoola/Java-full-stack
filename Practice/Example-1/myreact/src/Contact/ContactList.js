import React from 'react'
class ContactList extends React.Component{
  selectContact=(contact)=>{
    this.props.selContact(contact)
  }
  render(){
    return <div className="container mt-5">
       <div className="row">
        <div className="col">
          <table className="table table-hover">
            <thead className="bg-primary text-white">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.contacts.map((contact)=>{
                  return <tr key={contact.login.uuid} onClick={this.selectContact.bind(this,contact)}>
                    <td>{contact.login.uuid.substring(32,36)}</td>
                    <td>{contact.name.first}</td>
                    <td>{contact.email}</td>
                    <td>{contact.location.city}</td>
                   </tr>
                })
              }
            </tbody>
            
          </table>
        </div>
       </div>
    </div>
  }
}
export default ContactList
import React from 'react';
import '../css/userstyle.css';
import { fetchUsers } from '../action/userFetchAction';
import { connect } from 'react-redux';

class ListUserDetails extends React.Component{

  constructor(props) {
    super(props);
    this.handleUserDetails = this.handleUserDetails.bind(this);
  }

  componentDidMount() {
      this.props.dispatch(fetchUsers());
  }

  handleUserDetails (e) {
    console.log(e);
  }

  render(){
    const { error, loading, users } = this.props;

    return(
      <div>
        <button className= "addButton">Add New User</button>
        <table>
          <tbody>
            {
              users.map(eachUserList =>(
                <tr key={eachUserList.id}>
                    <td>
                      <input type="text" className = "inputFields" name="name" value={eachUserList.name} onChange = {this.handleUserDetails}/>
                    </td>
                    <td>
                    <input type="text" className = "inputFields" name="email" value={eachUserList.email} onChange = {this.handleUserDetails}/>
                    </td>
                  
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.items
});
  
export default connect(mapStateToProps, null)(ListUserDetails);
  
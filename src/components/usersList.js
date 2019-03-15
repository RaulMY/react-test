import React, { Component } from 'react';
import store from '../store/store'

const state = store.getState();

class UsersList extends Component {

  render() {
    return (
        <div className="container">
            <div className="row">
                <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Pais</th>
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {state.user.map((userDetail, index) => {
                        return <tr key={userDetail.email}>
                            <th>{userDetail.pais}</th>
                            <th>{userDetail.name}</th>
                            <th>{userDetail.phone}</th>
                            <th>{userDetail.email}</th>
                        </tr>
                    })}
                </tbody>


                </table>
            </div>
        </div>

    );
  }
}

export default UsersList;

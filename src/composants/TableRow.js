import React from 'react'

export const TableRow = ({ user }) => {

    return (

        <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>

        </tr>
    )
}

export default TableRow
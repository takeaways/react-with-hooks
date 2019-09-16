import React from 'react';

function User({user}){
  return <div>{user.id} {user.username} {user.email}</div>
}
function UserList({users}){
  return(
    <div>
      {users && users.map( user => <User key={user.id} user={user}/>)}
    </div>
  )
}

export default UserList

import React from 'react';

const Profile = ({profile}) => {



  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Address: {profile.address}</p>
    </div>
  )
}

export default Profile;
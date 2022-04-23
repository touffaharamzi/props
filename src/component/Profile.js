import React from 'react'

const Profile = ({myname,bio,profession,Cat,handleClick}) => {
    
    return (
        
    
    <div>
    <h2 onClick={handleClick}> My name is {myname} </h2>
    <h2> i am {bio} </h2>
    <h2> i work as {profession} </h2>
    <img src={Cat} alt='image'/>
    </div>
  );
}
Profile.defaultProps = {
    myname:"enter name",
    bio:"no information found",
    profession:"unemployed"
}
export default Profile
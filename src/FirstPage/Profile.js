import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const saveChanges = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/update/${user.id}`, editedUser);
      setUser(response.data); // Assuming the response contains updated user data
      alert('Changes saved successfully!');
    } catch (error) {
      console.error('Error saving changes:', error);
      alert('Failed to save changes. Please try again later.');
    }
  };

  return (
    <div className='prof'>
    <div className='profile-container'>
      <h2>Profile</h2>
      <div className='profile-form'>
        <table className='profile-table'>
          <tbody>
            <tr>
              <td><b>Username:</b></td>
              <td><input type="text" name="username" value={editedUser.username} onChange={handleInputChange} /></td>
            </tr>
            <tr>
              <td><b>Email:</b></td>
              <td><input type="email" name="email" value={editedUser.email} onChange={handleInputChange} /></td>
            </tr>
            <tr>
              <td><b>Mobile Number:</b></td>
              <td><input type="tel" name="contact" value={editedUser.contact} onChange={handleInputChange} /></td>
            </tr>
            {/* Add other fields as needed */}
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>
                <button onClick={saveChanges}>Save Changes</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Profile;

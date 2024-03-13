import React, { useState } from 'react';
import '../styles/EditProfile.css';

function EditProfile() {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  return (
    <div className='editProfile'>
      {editing ? (
        <div className='edit-container'>
          <div className='input-text-container'>
            <input className='input-dedit' type="text" placeholder="Tony"/>
            <input className='input-dedit' type="text" placeholder="Jarvis"/>
          </div>
          <div className='input-button-container'>
            <input className='edit-button' type="button" value="Save" />
            <input className='edit-button' type="button" value="Cancel" onClick={handleCancelClick} />
          </div>
        </div>
      ) : (
        <button className="edit-button" id='edit-profile' onClick={handleEditClick}>Edit Name</button>
      )}
    </div>
  );
}

export default EditProfile;
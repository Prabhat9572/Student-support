import React, { useState } from 'react';
import '../Style/Userprofile.css'; // Import the CSS file

const UserProfile = ({ user }) => {
  // Default user profile if no user data is available
  const defaultUser = {
    name: 'Guest User',
    role: 'N/A',
    about: 'No details provided.',
    email: 'Not available',
    phone: 'Not available',
    profilePicture: null,
    socialLinks: {
      leetcode: '',
      linkedin: '',
      hackerrank: '',
    },
  };

  const [profile, setProfile] = useState(user || defaultUser);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...profile });
  const [image, setImage] = useState(profile.profilePicture);

  // Toggle editing mode
  const handleEditToggle = () => {
    if (isEditing) {
      setProfile(editedProfile); // Save changes
    }
    setIsEditing(!isEditing);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle social media link changes
  const handleSocialLinkChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value,
      },
    }));
  };

  // Handle profile picture upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setEditedProfile((prev) => ({
          ...prev,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove profile picture
  const handleImageRemove = () => {
    setImage(null);
    setEditedProfile((prev) => ({
      ...prev,
      profilePicture: null,
    }));
  };

  // Handle logout
  const handleLogout = () => {
    console.log('User logged out');
    // Implement logout functionality
  };

  return (
    <div className="profile-container">
      <div className="profile-left">
        <div className="profile-header">
          <div className="profile-image-container">
            <img
              src={image || 'default-avatar.png'}
              alt="Profile"
              className="profile-image"
            />
            <div className="image-upload-container">
              <label htmlFor="image-upload" className="image-upload-label">
                Change Picture
              </label>
              <input
                type="file"
                id="image-upload"
                className="image-upload-input"
                onChange={handleImageUpload}
              />
              {image && (
                <button
                  className="remove-image-button"
                  onClick={handleImageRemove}
                >
                  Remove Image
                </button>
              )}
            </div>
          </div>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
        </div>
        <div className="profile-details">
          <h3>About</h3>
          <p>{profile.about}</p>
          <h3>Contact Information</h3>
          <ul>
            <li>Email: {profile.email}</li>
            <li>Phone: {profile.phone}</li>
          </ul>
          <h3>Social Links</h3>
          <ul>
            <li>
              LeetCode: {profile.socialLinks.leetcode || 'Not available'}
            </li>
            <li>
              LinkedIn: {profile.socialLinks.linkedin || 'Not available'}
            </li>
            <li>
              HackerRank: {profile.socialLinks.hackerrank || 'Not available'}
            </li>
          </ul>
        </div>
      </div>
      <div className="profile-right">
        {isEditing ? (
          <div className="edit-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={editedProfile.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <input
                type="text"
                name="role"
                value={editedProfile.role}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>About</label>
              <textarea
                name="about"
                value={editedProfile.about}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={editedProfile.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={editedProfile.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>LeetCode Link</label>
              <input
                type="url"
                name="leetcode"
                value={editedProfile.socialLinks.leetcode}
                onChange={handleSocialLinkChange}
              />
            </div>
            <div className="form-group">
              <label>LinkedIn Link</label>
              <input
                type="url"
                name="linkedin"
                value={editedProfile.socialLinks.linkedin}
                onChange={handleSocialLinkChange}
              />
            </div>
            <div className="form-group">
              <label>HackerRank Link</label>
              <input
                type="url"
                name="hackerrank"
                value={editedProfile.socialLinks.hackerrank}
                onChange={handleSocialLinkChange}
              />
            </div>
          </div>
        ) : (
          <button onClick={handleEditToggle} className="edit-button">
            Edit Profile
          </button>
        )
        // (
        //     <button onClick={handleEditToggle} className="edit-button">
        //       Update
        //     </button>
        //   )
        }
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;

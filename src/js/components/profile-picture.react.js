import React from 'react';

export default class ProfilePicture extends React.Component {
  render() {
    return (
      <div className="profile-picture">
        <div
          style={{
            backgroundImage : 'url(' + this.props.src + ')'
          }}
          alt="Profile picture"
          className="profile-picture__image">
        </div>
      </div>
    )
  }
}

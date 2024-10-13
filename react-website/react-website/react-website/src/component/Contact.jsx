import React from 'react';
import './Contact.css';

export default function Contact() {
  const accountDetails = {
    name: 'Johni Doe',
    email: 'johni.doe@example.com',
    phone: '+1234567890',
    address: '123 Main St, Anytown, USA',
    socialMedia: {
      twitter: '@johnidoe',
      facebook: 'facebook.com/johnidoe',
    },
  };

  return (
    <div className="contact-container">
      <h1>Contact Information</h1>
      <h2>Account Details:</h2>
      <p><strong>Name:</strong> {accountDetails.name}</p>
      <p><strong>Email:</strong> {accountDetails.email}</p>
      <p><strong>Phone:</strong> {accountDetails.phone}</p>
      <p><strong>Address:</strong> {accountDetails.address}</p>
      <div className="social-media">
        <p><strong>Twitter:</strong> <a href={`https://twitter.com/${accountDetails.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer">{accountDetails.socialMedia.twitter}</a></p>
        <p><strong>Facebook:</strong> <a href={`https://${accountDetails.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer">{accountDetails.socialMedia.facebook}</a></p>
      </div>
    </div>
  );
}

import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from 'react-icons/fa';
import profileImage from '../public/photo_2024-08-27_19-31-28.jpg'; // Add the correct path to your profile image
import { IoLogoInstagram } from 'react-icons/io';
import { SiTelegram } from 'react-icons/si';
import { AiFillInstagram } from 'react-icons/ai';

function BusinessCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg p-6 bg-white rounded-lg shadow-lg relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-32 md:w-40 h-32 md:h-40 flex justify-center items-center">
            <div className="rounded-full overflow-hidden border-4 border-red-600">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <h1 className="text-xl md:text-2xl font-bold text-black">
              Nazirjon Nazirjonov
            </h1>
            <h2 className="text-md md:text-lg text-yellow-600 mt-1">
              Central Asian Medical University, 2-bosqich talabasi, bulajak
              (nevrolog) med bloger😎
            </h2>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="text-black mr-2" />
                <a
                  href="tel:+998777772314"
                  className="text-black hover:text-red-600"
                >
                  +998 77 777 2314
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <SiTelegram className="text-black mr-2" />
                <a
                  href="https://t.me/Dr_djamolidinovich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-red-600"
                >
                  Dr_djamolidinovich
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="text-black mr-2" />
                <p className="text-black">Fergana, Uzbekistan</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <AiFillInstagram className="text-black mr-2 text-lg" />
                <a
                  href="https://www.instagram.com/dr_djamolidinovich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-red-600"
                >
                  dr_djamolidinovich
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-600"></div>
        <div
          className="absolute bottom-0 right-0 h-2 bg-gray-800"
          style={{ width: '60%' }}
        ></div>
      </div>
    </div>
  );
}

function App() {
  return <BusinessCard />;
}

export default App;

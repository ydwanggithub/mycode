// src/App.js
/**
 * Main App Component
 * 
 * This is the root component of the TubeStamp application.
 * It sets up the basic structure and includes SEO meta tags via React Helmet.
 * 
 * Features:
 * - SEO optimization with meta tags
 * - Landing page integration
 * - Firebase initialization
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import LandingPage from './unAuth/LandingPage';
import './App.css';
import './firebase';

/**
 * App Component
 * 
 * Main application component that wraps the entire app structure.
 * Uses Helmet for SEO meta tags and renders the LandingPage component.
 * 
 * @returns {JSX.Element} The main app structure with SEO tags and landing page
 */
function App() {
  return (
    <div className="app-structure-container">
      {/* SEO Meta Tags for better search engine visibility */}
      <Helmet>
        <meta
          name="description"
          content="TubeStamp is a free online tool that allows you to easily create timestamp links for YouTube videos. Share specific moments from videos with your friends and audience."
        />
        <meta
          name="keywords"
          content="YouTube, timestamp, links, video, sharing, free, online, tool"
        />
      </Helmet>
      {/* Main landing page component */}
      <LandingPage />
    </div>
  );
}

export default App;
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg_color flex items-center justify-center">
      <div className="bg-section_bg_color p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-accent_text_color">Welcome</h1>
        <p className="text-subtitle_text_color mb-8 text-center">This is a simple home page for your application.</p>
        
        <nav className="mb-8">
          <ul className="space-y-4">
            {[
              { to: "/token/trade", text: "Token Trading" },
              { to: "/token/chart", text: "Token Chart" },
              { to: "/create", text: "Create" },
              { to: "/settings", text: "Settings" },
            ].map((link) => (
              <li key={link.to}>
                <Link 
                  to={link.to} 
                  className="block w-full text-center py-2 px-4 bg-button_color text-button_text_color rounded hover:opacity-90 transition duration-300"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          onClick={() => alert('You clicked the button!')}
          className="w-full py-2 px-4 bg-secondary_button_color text-text_color rounded hover:opacity-90 transition duration-300"
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default Home;

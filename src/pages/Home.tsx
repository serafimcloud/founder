import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Добро пожаловать</h1>
        <p className="text-gray-600 mb-8 text-center">Это простая домашняя страница вашего приложения.</p>
        
        <nav className="mb-8">
          <ul className="space-y-4">
            {[
              { to: "/token/trade", text: "Торговля токенами" },
              { to: "/token/chart", text: "График токенов" },
              { to: "/create", text: "Создать" },
              { to: "/settings", text: "Настройки" },
            ].map((link) => (
              <li key={link.to}>
                <Link 
                  to={link.to} 
                  className="block w-full text-center py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          onClick={() => alert('Вы нажали кнопку!')}
          className="w-full py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-300"
        >
          Нажми меня
        </button>
      </div>
    </div>
  );
};

export default Home;

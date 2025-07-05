import React from 'react';
import { NavLink } from 'react-router';

const EnglishJanala = () => {
    return (
        <div className='max-w-7xl mx-auto my-8'>
            <div className="ml-6">
          <button className=" hover:text-blue-500">
            <NavLink to="/">
              <i class="fa-solid fa-arrow-left-long mr-2"></i>Home
            </NavLink>
          </button>
        </div>
        </div>
    );
};

export default EnglishJanala;
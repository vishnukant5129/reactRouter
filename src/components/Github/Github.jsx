import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData();

  return (
    <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center py-12 px-4 lg:px-24">
      
      {/* Followers / Following Badges */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
        <div className="bg-orange-500 text-white px-8 py-4 rounded-2xl shadow-2xl text-2xl font-semibold hover:scale-105 transition-transform duration-300">
          Followers: {data.followers}
        </div>
        <div className="bg-blue-500 text-white px-8 py-4 rounded-2xl shadow-2xl text-2xl font-semibold hover:scale-105 transition-transform duration-300">
          Following: {data.following}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl">
        {/* Avatar */}
        <div className="flex justify-center lg:justify-end">
          <img
            className="w-80 h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-500"
            src={data.avatar_url}
            alt="GitHub Avatar"
          />
        </div>

        {/* Description */}
        <div className="text-center lg:text-left text-gray-100 space-y-6 lg:space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-orange-500">
            GitHub Profile Overview
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore unde dolorem veniam
            natus quos cumque aspernatur excepturi beatae a sequi, facere porro debitis, inventore
            quod aliquid hic, dicta laudantium quidem.
          </p>
          <p className="text-lg lg:text-xl leading-relaxed">
            Quisquam, asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            eaque doloremque optio, sunt repellat hic quibusdam beatae eum, quidem magni!
          </p>
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg transition-transform transform hover:scale-105"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/vishnukant5129');
  return response.json();
};

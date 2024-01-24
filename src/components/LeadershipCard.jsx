import React from 'react';

function LeadershipCard({img, name, position, link}) {
  return (
    <div className='flex flex-col items-center'>
      {/* Your component content goes here */}
      <a href={link}>
      <img src={"src/assets/people/leadership/"+img} alt={name}
          className="object-fit w-48 h-48 rounded-full border-2 hover:border-primary hover:p-1 transition-all duration-500 ease-in-out cursor-pointer"
      ></img>
      </a>
      <h1 className="text-center text-3xl mt-4">{name}</h1>
      <h2 className="text-center text-xl text-secondary">{position}</h2>
    </div>
  );
};

export default LeadershipCard;

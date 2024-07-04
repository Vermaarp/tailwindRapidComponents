

import React from 'react';
import Link from 'next/link';
import { cardsData, CardData } from '@/components/cardsData'; // Adjust the path as necessary

function Cards() {
  return (
    <>
    {cardsData.map((card) => (
      <div key={card.id} className="p-4 rounded-md border border-gray-900 group hover:shadow-lg hover:shadow-blue-600 hover:border-blue-800">
        <Link href={card.link} className='space-y-3 block'  rel="noopener noreferrer">
            <img src={card.image} alt={`${card.title} tag`} className='w-full h-auto object-cover rounded-md' />
            <h1 className='text-sm font-bold text-gray-600'>{card.title}</h1>
            <p className='text-sm font-thin text-gray-600'>{card.content}</p>
        </Link>
      </div>
    ))}
  </>
  );
}

export default Cards;

import React from 'react';



const Card = ({ name, rating,postcode,outcode,address,type,addressLine2,url })  => {
  
  const roundedRating = Math.min(Math.round(rating), 5);

  // Generate an array of stars based on the rounded rating
  const stars = Array.from({ length: roundedRating }, (_, index) => (
    <i key={index} className="fa-regular fa-star fa-solid text-yellow-300"></i>
  ));
  
  return (
   
   
    <div className="card  w-[32%] h-fit shadow-lg   text-white  rounded-xl border-2  md:mt-28 mt-36">
     <div className='p-8'>
    <div className='flex w-[100%] mb-3 items-center justify-between'>
      <p className='text-xl font-semibold text-black w-[50%] mr-4 '>{name}</p>
      <p className='mt-2 text-black w-[40%] relative' >
          <div className='flex text-yellow-300'>
          {stars}
          </div>
      </p>
      </div>
      <div className='flex w-full text-sm  w-full'>   <p  className=' mr-1 text-gray-500'><i class="fa-solid fa-location-dot text-gray-600 mr-3"></i>{address},  {addressLine2}</p>
        </div>
        <div className='mb-10'>
      <p className=' text-gray-500 text-sm'> {postcode} {outcode}</p>

      </div>
</div>
      <div className=' bg-slate-100 w-[100%] p-4  rounded-b-xl '>
      <p  className='text-green-500  '>{type}</p>
      <p className='text-blue-600'><a href={url}> Visit Menu </a>  </p>
      </div>
    </div>
  
  
  );
};

export default Card;
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export type SalesProps = {
  name: string;
  email: string;
  saleAmount: string;
};

export default function SalesCard(props: SalesProps) {
  return (
    <div className='flex flex-wrap justify-between gap-3'>
      <section className='flex justify-between gap-3'>
        <div className='h-14 w-14 rounded-full bg-gray-100 p-1'>
          <img src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${props.name}`} alt='avtar' width={200} height={200} />
        </div>
        <div>
          <p className='text-sm'>{props.name}</p>
          <div className='text-ellipsis text-gray-500 whitespace-nowrap overflow-hidden w-[120px] sm:w-auto'>
            {props.email}
          </div>
        </div>
      </section>
      <p>{props.saleAmount}</p>
    </div>
  )
}
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import React from 'react'

export type CardProps = {
     label: string;
     icon: LucideIcon;
     amount: string;
     discription: string;
}

export default function Card(props: CardProps) {
  return (
    <CardContent>
      <section className='flex justify-between gap-2'>
        {/* label */}
        <p className='text-sm'>{props.label}</p>
        {/* icon */}
        <props.icon className='w-4 h-4 text-gray-400'/>
      </section>
      <section className='flex flex-col gap-1'>
        {/* amount */}
        <h2 className='text-2xl font-semibold'>{props.amount}</h2>
        {/* discription */}
        <p className='text-xs text-gray-500'>{props.discription}</p>
      </section>
    </CardContent>
  )
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cn("w-full flex flex-col gap-3 border rounded-xl p-5 shadow", props.className)}/>
  );
}
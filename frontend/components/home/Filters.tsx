import React from 'react'
import { Input } from '../ui/input'

const TAGS = [
  {
    id: 1,
    name: 'Design'
  },
  {
    id: 2,
    name: 'Development'
  },
  {
    id: 3,
    name: 'UX'
  },
  {
    id: 4,
    name: 'Marketing'
  },
]

const Filters = () => {
  return (
    <div className='flex items-center justify-between mb-8'>
      <Input placeholder='Search' className='w-1/3 rounded-full px-6'/>
      <div className='flex items-center gap-4'>
        <h1 className='text-sm'>My Topics:</h1>
        {TAGS.map((item) => (
          <span className='text-xs h-10 bg-gray-100 rounded-full flex items-center px-6' key={item.id}>{item.name}</span>
        ))}
      </div>
    </div>
  )
}

export default Filters
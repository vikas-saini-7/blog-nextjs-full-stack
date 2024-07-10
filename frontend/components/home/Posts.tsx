import React from 'react'

const POSTS_DATA = [
    {
      "id": 1,
      "author": "Chintan Bhatt",
      "date": "Apr 16, 2022",
      "title": "8 Psychology-Based Design Hacks That Will Make You A Better UX Designer",
      "description": "If the first thought that crossed your mind when you read the title of the article was 'What does Psychology has to do with UX Design?' then, yes, that's what we thought too, now that we're on the same page, let's end this article here. Cheers!",
      "tags": ["UX design"],
      "readTime": "4 min read",
      "imageUrl": "path/to/image1.png"
    },
    {
      "id": 2,
      "author": "Alex Morgan",
      "date": "May 10, 2023",
      "title": "10 Tips for Creating Responsive Web Designs",
      "description": "Responsive web design is essential in today's digital landscape. Learn 10 tips to make your web designs adaptable to any screen size.",
      "tags": ["Web design", "Responsive design"],
      "readTime": "5 min read",
      "imageUrl": "path/to/image2.png"
    },
    {
      "id": 3,
      "author": "Jordan Lee",
      "date": "Jun 05, 2023",
      "title": "The Future of Mobile App Development",
      "description": "Explore the latest trends in mobile app development and what to expect in the coming years. Stay ahead of the curve with these insights.",
      "tags": ["Mobile development", "Technology"],
      "readTime": "6 min read",
      "imageUrl": "path/to/image3.png"
    },
    {
      "id": 4,
      "author": "Taylor Swift",
      "date": "Jul 22, 2023",
      "title": "Effective Strategies for Improving User Retention",
      "description": "Discover strategies to keep your users engaged and coming back to your app or website. User retention is key to success.",
      "tags": ["User retention", "UX"],
      "readTime": "7 min read",
      "imageUrl": "path/to/image4.png"
    },
    {
      "id": 5,
      "author": "Jamie Fox",
      "date": "Aug 14, 2023",
      "title": "Designing for Accessibility: Best Practices",
      "description": "Learn the best practices for designing accessible websites and applications. Ensure your designs are inclusive and usable by all.",
      "tags": ["Accessibility", "Web design"],
      "readTime": "8 min read",
      "imageUrl": "path/to/image5.png"
    }
]

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
  

const Posts = () => {
  return (
    <div>
        {POSTS_DATA.map((item) => (
            <div className='mt-4 border-t py-8 flex flex-col'>
                <div className='flex mb-4'>
                    <img className='h-12 rounded-full' src='https://imgcdn.stablediffusionweb.com/2024/5/2/81328692-c85f-4e08-9c01-f8f9f49fb291.jpg' alt="" />
                    <div className='pl-4'>
                        <div>
                            <h1>{item.author}</h1>
                            <p className='text-xs text-gray-500'>{item.date}</p>
                        </div>
                        {/* <p>{item.title}</p> */}
                    </div>
                </div>
                <div className='flex justify-between gap-4 lg:gap-8'>
                    <div className='flex-2/3'>
                        <h1 className='text-xl font-bold mb-2'>{item.title}</h1>
                        <p className='text-sm text-gray-500'>{item.description}</p>
                    </div>
                    <img className='w-1/3 rounded-lg grayscale' src="https://framerusercontent.com/images/RBpHBZtwSkU6uF9GENaXtaZ4ozU.png" alt="" />
                </div>
                <div className='flex items-center gap-4 mt-4'>
                    {item.tags?.map((item) => (
                        <span className='text-xs h-10 bg-gray-100 rounded-full flex items-center px-6'>{item}</span>
                    ))}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Posts
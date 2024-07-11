'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const getPrettyDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // hour: '2-digit',
    // minute: '2-digit',
    // second: '2-digit',
  };
  return date.toLocaleDateString(undefined, options);
};

const BACKEND_URL = 'http://localhost:1337'

interface Post {
  id: number;
  attributes: {
    author: string;
    createdAt: string;
    title: string;
    description: string;
    tags: string[];
    readTime: string;
    image: any;
    categories: any;
  };
}

const page = () => {
    const [post, setPost] = useState<Post[]>([]);
    const {id} = useParams();

  const fetchBlogs = async () => {
    const url = `http://localhost:1337/api/blogs/${id}?populate=*`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`);
      }
      const result = await response.json();
      setPost(result.data);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.error('Fetching error:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <main className="">
      <div className="container mx-auto flex">
        <div className="w-2/3 mr-8 py-8">
        <div className="flex items-center justify-between mb-4">
            <div className='flex items-center'>
              <img
                className="h-12 rounded-full"
                src="https://imgcdn.stablediffusionweb.com/2024/5/2/81328692-c85f-4e08-9c01-f8f9f49fb291.jpg"
                alt=""
              />
              <div className="pl-4">
                <div className='flex items-center gap-3'>
                  <h1>{post?.attributes?.author}</h1>
                  <p className="text-xs text-gray-500">{getPrettyDate(post?.attributes?.createdAt)}</p>
                </div>
                <p className='text-sm text-gray-500'>Software Developer</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {post?.attributes?.categories?.data.map((category: any, index: number) => (
                <span key={index} className="text-xs h-10 bg-gray-100 rounded-full flex items-center px-6">
                  {category?.attributes?.name}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">{post?.attributes?.title}</h1>
          <img
            className="w-full rounded-lg"
            src={`${BACKEND_URL}${post?.attributes?.image?.data?.attributes?.url}`}
            alt=""
          />
          <div className='mt-4'>
            [Content Goes here...]
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel voluptate nobis, quis quasi veritatis quo dolore magni corrupti non id incidunt perferendis quas doloremque! Sint culpa aspernatur dolorem officia hic in dolores corrupti, dignissimos minus debitis. Cum, quasi magnam, enim dolorem excepturi quia earum officiis sapiente, eveniet praesentium nostrum ex quis veritatis ad assumenda odit ipsum totam! Eaque nemo voluptatem tempora quibusdam perspiciatis quae dicta saepe. Esse doloribus eos consequuntur rem nobis, labore voluptatum eius nostrum delectus mollitia iusto alias? Aperiam adipisci voluptas, mollitia exercitationem ut non? Cum iste itaque laborum similique maxime rerum mollitia ipsum earum sit officia obcaecati, vero accusantium ex possimus quas eos odio, voluptates veniam molestias totam aliquid. Quas, quidem sint excepturi ex, repellendus perspiciatis praesentium, et corporis ab unde velit. Provident, aliquam dolore. Non, doloremque. Accusamus officiis perferendis, quia quisquam unde omnis doloribus. Inventore dolore, molestias nesciunt quaerat labore possimus perspiciatis, totam tenetur dolor itaque nobis illum, natus ratione. Ex, atque ipsa fugit veniam officia officiis maxime delectus aspernatur rerum, fuga ratione minus omnis iure similique ipsum incidunt itaque quod ea, voluptate aut dolorum optio. Non sint eius rem voluptatibus nihil magnam in quibusdam ullam ducimus ratione placeat dolorem maiores esse quaerat, delectus fuga beatae omnis. Officiis dignissimos quibusdam eius commodi, vitae perferendis praesentium consequatur! Dolorum cupiditate cum consequatur magnam. Neque commodi pariatur maiores optio impedit, quaerat voluptatem, perferendis consequuntur similique ipsum ducimus ullam accusamus. Enim eius quo cumque et necessitatibus deserunt magni nesciunt saepe a iste quidem quaerat ea voluptate quod, aspernatur rem officia consequuntur, exercitationem at voluptatum adipisci cupiditate. Velit veritatis officia delectus ullam suscipit non illo dolor expedita optio rem porro hic, vitae nulla saepe a ipsam libero, nesciunt doloribus voluptatibus corrupti facilis ea dignissimos laboriosam nobis? Odio, facilis architecto? Quisquam dolore porro nesciunt sed. Eius eligendi molestias a ratione dolor error?
          </div>
          {/* <Filters/>
          <div className="flex justify-between">
            <h1 className="font-bold">Articles</h1>
            <Button size={'sm'} className="rounded-full" variant='outline'>Following</Button>
          </div>
          <Posts/> */}
        </div>
        <div className="w-1/3 border-l pl-8 py-8 sticky top-0 h-[100vh]">
          <div>
            <h1 className="mb-4">You may also like...</h1>
          </div>
          {/* <div className="p-6 bg-gray-100 rounded-lg mb-8">
            <div>
              <h1 className="font-bold mb-2">Get unlimited access to everything on Reader</h1>
              <p className="text-xs text-gray-500 mb-4">Plans starting at least than $1/week.</p>
              <Button size={'sm'} className="rounded-xl" variant={'outline'}>Get unlimited access</Button>
            </div>
            <div></div>
          </div>
          <div>
            <h1 className="mb-4">People you might be interested</h1>
            <ul className="">
              {PEOPLE_LIST.map((item) => (
                <li className="flex mb-4" key={item.id}>
                  <img className="h-12 rounded-full" src={item.image} alt="" />
                  <div className="flex-1 pl-4">
                    <h2 className="text-sm">{item.name}</h2>
                    <p className="text-xs text-gray-500 max-w-48">{item.role}</p>
                  </div>
                  <Button size={'sm'} className="rounded-xl" variant={'outline'}>Follow</Button>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </main>
  )
}

export default page
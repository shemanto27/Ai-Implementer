import { useState } from 'react';
import { BlogCard } from './BlogCard';
import { Button } from '@/components/ui/button';

function AllBlogsCard() {
    const blogPosts = [
        {
          title: "The Future of AI in Business",
          date: "May 15, 2023",
          publisher: "John Doe",
          imageUrl: "/placeholder.svg?height=200&width=384",
          publisherImageUrl: "/placeholder.svg?height=32&width=32",
          category:'ML Project',
        },
        {
          title: "Machine Learning Trends in 2023",
          date: "May 10, 2023",
          publisher: "Jane Smith",
          imageUrl: "/placeholder.svg?height=200&width=384",
          publisherImageUrl: "/placeholder.svg?height=32&width=32",
          category:'DL Project',
        },
        {
          title: "How AI is Transforming Healthcare",
          date: "May 5, 2023",
          publisher: "Alex Johnson",
          imageUrl: "/placeholder.svg?height=200&width=384",
          publisherImageUrl: "/placeholder.svg?height=32&width=32",
          category:'API Development',
        }
      ];

      const [blogCategory, setBlogCategory] = useState('All');
  return (
    <>
      <div className="w-full max-w-6xl mx-auto mb-10">
          <div className='flex flex-col justify-center text-center'>
          <h2 className="text-3xl font-bold text-gray-100 mb-2">Latest Blog Posts</h2>
            <div className='flex justify-center items-center my-10 gap-2'>
            
            <Button className='bg-white hover:bg-blue-600 hover:text-white rounded-3xl'>All</Button>

            <Button className='bg-white hover:bg-blue-600 hover:text-white rounded-3xl'>ML Project</Button>

            <Button className='bg-white hover:bg-blue-600 hover:text-white rounded-3xl'>DL Project</Button>

            <Button className='bg-white hover:bg-blue-600 hover:text-white rounded-3xl'>API Development</Button>

            <Button className='bg-white hover:bg-blue-600 hover:text-white rounded-3xl'>MERN Stack</Button>

            
        </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter((post)=> blogCategory === 'All'?true:post.category===blogCategory ).map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
    </>
  )
}

export default AllBlogsCard
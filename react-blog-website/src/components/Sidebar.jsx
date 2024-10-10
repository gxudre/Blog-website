import React, { useEffect, useState } from 'react';
import {FaArrowRight} from "react-icons/fa6";

const Sidebar = () => {
    const [popularBlogs, setPopularBlogs] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/blogs").then( res => res.json()).then(data => setPopularBlogs(data.slice(0,15)))
    },[])
  return (
    <div>
        <h3 className='text-2x1 font-semibold px-4'>Latest Blogs</h3>
        <div>
            {
                popularBlogs.map(blog => <div key={blog.id}>
                    <h4>{blog.title}</h4>
                    <Link to="/" className="font-medium hover:text-orange-500 inline-flex items-center py-1">Read more<FaArrowRight className='mt-1 ml-2'/></Link> 
                </div>)
            }
        </div>
    </div>
  )
}

export default Sidebar
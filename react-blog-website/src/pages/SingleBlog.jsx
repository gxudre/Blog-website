import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaClock, FaUser } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    cstegory,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5x1 lg:text-7xl leading-snug font-bold mb-5">
          Single Blog
        </h2>
      </div>

      {/*Blog Details*/}
      <div className="max-w-7x1 mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3x1 mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" /> {author} |{" "}
            {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" /> {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              quae iusto aperiam consequuntur delectus. Eum voluptas quaerat
              asperiores. Eum molestiae porro harum consequuntur beatae, natus
              dolorum non assumenda cupiditate magni?
            </p> <br/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              vitae ut mollitia, amet accusantium numquam voluptatum
              repellendus. Sequi veritatis, nulla dolor omnis, vitae officia qui
              libero suscipit repellendus iure cum.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              quaerat cum? Soluta dolore doloribus, amet provident excepturi
              aliquam earum officiis voluptates, sunt vitae cum doloremque
              repellendus possimus autem optio fugit?
            </p> <br/>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              quae iusto aperiam consequuntur delectus. Eum voluptas quaerat
              asperiores. Eum molestiae porro harum consequuntur beatae, natus
              dolorum non assumenda cupiditate magni?
            </p> <br/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              vitae ut mollitia, amet accusantium numquam voluptatum
              repellendus. Sequi veritatis, nulla dolor omnis, vitae officia qui
              libero suscipit repellendus iure cum.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              quaerat cum? Soluta dolore doloribus, amet provident excepturi
              aliquam earum officiis voluptates, sunt vitae cum doloremque
              repellendus possimus autem optio fugit?
            </p> <br/> 
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              quaerat cum? Soluta dolore doloribus, amet provident excepturi
              aliquam earum officiis voluptates, sunt vitae cum doloremque
              repellendus possimus autem optio fugit?
            </p> <br/>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              quae iusto aperiam consequuntur delectus. Eum voluptas quaerat
              asperiores. Eum molestiae porro harum consequuntur beatae, natus
              dolorum non assumenda cupiditate magni?
            </p> <br/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              vitae ut mollitia, amet accusantium numquam voluptatum
              repellendus. Sequi veritatis, nulla dolor omnis, vitae officia qui
              libero suscipit repellendus iure cum.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              quaerat cum? Soluta dolore doloribus, amet provident excepturi
              aliquam earum officiis voluptates, sunt vitae cum doloremque
              repellendus possimus autem optio fugit?
            </p> <br/> 
          </div>
        </div>
        <div className="lg:w-1/2">
            <Sidebar/>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

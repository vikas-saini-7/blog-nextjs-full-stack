import React from "react";

const PostsSkeleton = () => {
  return (
    <div className="mb-8">
      <div className="mt-4 py-4 px-4 bg-gray-100 rounded-xl flex flex-col">
        <div className="flex mb-4">
          {/* <img
              className="h-12 rounded-full"
              src="https://imgcdn.stablediffusionweb.com/2024/5/2/81328692-c85f-4e08-9c01-f8f9f49fb291.jpg"
              alt=""
            /> */}
            <div className="bg-gray-200 h-12 w-12 rounded-full"></div>
          <div className="pl-4 flex items-center w-full">
            <div className="bg-gray-200 h-6 w-1/2 rounded">
              <h1>{/* {item.attributes.author} */}</h1>
              <p className="text-xs text-gray-500">
                {/* {getPrettyDate(item.attributes.createdAt)} */}
              </p>
            </div>
            <p className="text-sm text-gray-500">{/* Software Developer */}</p>
          </div>
        </div>
        <div className="flex justify-between gap-4 lg:gap-8">
          <div className="w-full">
            <h1 className="text-xl font-bold mb-2 hover:text-gray-700">
              {/* {item.attributes.title} */}
            </h1>
            <p className="text-sm text-gray-500 rounded bg-gray-200 w-full h-16">
              {/* {item.attributes.description} */}
            </p>
          </div>
          {/* <img
              className="w-1/3 rounded-lg grayscale"
              src={`${BACKEND_URL}${item?.attributes?.image?.data?.attributes?.url}`}
              alt=""
            /> */}
        </div>
        <div className="flex items-center gap-4 mt-4">
          {/* {item.attributes?.categories?.data.map(
              (category: any, index: number) => (
                <span
                  key={index}
                  className="text-xs h-10 bg-gray-100 rounded-full flex items-center px-6"
                >
                  {category?.attributes?.name}
                </span>
              )
            )} */}
            <p className="w-16 h-8 rounded-full bg-gray-200"></p>
            <p className="w-16 h-8 rounded-full bg-gray-200"></p>
        </div>
      </div>
    </div>
  );
};

export default PostsSkeleton;

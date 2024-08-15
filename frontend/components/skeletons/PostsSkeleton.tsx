import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const PostSkeleton = () => {
  return (
    <div className="border-t border-gray-500/10 mt-4 pt-4 pb-4">
      <div className="flex items-center mb-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="pl-4">
          <div className="flex items-center gap-3 mb-2">
            <Skeleton className="h-10 w-24" />
          </div>
          {/* <Skeleton className="h-4 w-32" /> */}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 lg:gap-8">
        <div className="w-full md:w-2/3">
          <Skeleton className="h-8 w-full mb-2" />
          <Skeleton className="h-24 w-full" />
        </div>
        <Skeleton className="w-full md:w-1/3 h-48 rounded-lg" />
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Skeleton className="h-10 w-24 rounded-full" />
        <Skeleton className="h-10 w-24 rounded-full" />
        <Skeleton className="h-10 w-24 rounded-full" />
      </div>
    </div>
  );
};

export default PostSkeleton;

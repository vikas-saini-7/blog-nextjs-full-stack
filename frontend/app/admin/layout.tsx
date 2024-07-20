import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <div className="grid h-[calc(100vh-65px)] md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr]">
        <Sidebar />
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default layout;

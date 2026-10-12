"use client";
import React from "react";
import NavLayout from "../components/common/nav/Navlayout";
import Footer from "../components/common/nav/footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen h-full flex-col w-full">
      <NavLayout />

      <main className="w-full flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;

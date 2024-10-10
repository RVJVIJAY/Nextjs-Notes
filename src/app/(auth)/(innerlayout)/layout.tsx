"use client";
import Link from "next/link";
import React, { useState } from "react";
import './style.css'
import { usePathname } from "next/navigation";
interface Children {
  children: React.ReactNode;
}
const InnerLayout: React.FC<Children> = ({ children }) => {
  const pathname = usePathname();
  const links = [
    {
      name: "Login",
      href: "/login",
    },
    { name: "Register", href: "/register" },
  ];
  const [input,setinput]=useState<string>('');
  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setinput(e.target.value)}/>
      {links.map((item, index) => {
        const isActivelink = pathname.startsWith(item.href)
        return(
          <Link
            className={isActivelink ? "font-bold" : "text-blue-600"}
            key={index}
            href={item.href}
          >
            {item.name}
          </Link>
        );
      })}
      <h1>Inner Layout</h1>
      <p>
        when we grp the folder by using () bracket , we no need use the folder
        url , we can easily grp the folders{" "}
      </p>
      {children}
    </div>
  );
};

export default InnerLayout;

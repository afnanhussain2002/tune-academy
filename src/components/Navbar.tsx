"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
         <Menu setActive={setActive}>
       <Link href={"/"}>
       <MenuItem setActive={setActive} item="Home" active={active}>
       
       </MenuItem>
       </Link>
       <MenuItem setActive={setActive} item="Our Courses" active={active}>
       
       <div className="flex flex-col space-y-4 text-sm">
       <HoveredLink href="/courses">All courses</HoveredLink>
       <HoveredLink href="/basic-music">Basic Music Theory</HoveredLink>
       <HoveredLink href="/advance-music">Advanced Composition</HoveredLink>
       <HoveredLink href="/song-writing">Song writing</HoveredLink>
       <HoveredLink href="/music-production">Music Production</HoveredLink>
       </div>
       </MenuItem>
       <Link href={"/contact"}>Contact Us</Link>
         </Menu>
        </div>
    )
}

export default Navbar;
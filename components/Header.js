// components/MainComponent.js
"use client";
import React from "react";
import Image from 'next/image';
import Link from 'next/link';

function MainComponent() {
    return (
        <header className="text-center py-4 bg-[#547443] shadow-9xl">
            <div className="flex items-center justify-center">
                <Link href="/" scroll={false}>
                    <Image
                        src="/images/high-tech_logo.png"
                        alt="High-tech Garden logo"
                        width={80}
                        height={80}
                    />
                </Link >
            </div>
        </header>
    );
}

export default MainComponent;

"use client";
import React from "react";
import Header from '/components/Header.js'
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Icon_bar from '../../components/Icon_bar';

function Test() {
    const [loadingDots, setLoadingDots] = React.useState('');

    React.useEffect(() => {
        const interval = setInterval(() => {
            setLoadingDots(prev => prev.length < 3 ? prev + '.' : '');
        }, 500);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="font-sans mx-auto">
            <div className="flex flex-col items-center justify-center h-screen bg-[#faf3e0]">
                <div className="text-[#4a5d23] text-4xl font-bold  pb-10 transform">
                    <Image
                        src="/images/logo_green.png"
                        alt="High-tech Garden logo"
                        width={200}
                        height={200}
                        className="w-64 h-auto mb-40"
                    />
                </div>
                <div className="text-[#4a5d23] mb-4">
                    <i className="fas fa-seedling text-2xl"></i>
                </div>
                <div className="text-[#4a5d23] text-lg font-semibold">
                    loading{loadingDots}
                </div>
            </div>
        </div>
    );
}

export default Test;

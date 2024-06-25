"use client";
import React from "react";
import Header from '/components/Header.js'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Icon_bar from '../../components/Icon_bar';


function Garden() {
    return (
        <div className="font-sans mx-auto">
            <Header />
            <div className="flex justify-center min-h-screen bg-[#547443] p-6 text-white ">
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}

                    exit={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }} >
                    <div className="flex flex-col items-center justify-center w-full">
                        <div class="mb-12">
                            <Icon_bar />
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold mb-4 text-center">

                        Coming Soon
                    </h1>

                </motion.div>
            </div>

        </div>
    );
}

export default Garden;
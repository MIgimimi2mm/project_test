"use client";
import React from "react";
import Header from '/components/Header.js'
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Icon_bar from '../../components/Icon_bar';

function Photo() {
    return (
        <div className="font-sans mx-auto">
            <Header />
            <div className="flex justify-center min-h-screen bg-[#547443] p-6 text-white ">
                <div className="w-full">
                    <motion.div
                        key="photo-page"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.2, duration: 0.5 }}
                    >

                        <Icon_bar />
                        <div className="grid grid-cols-2 gap-4 rounded">
                            {['photo (1).jpg', 'photo (2).jpg', 'photo (3).jpg', 'photo (4).jpg', 'photo (5).jpg', 'photo (6).jpg', 'photo (7).jpg', 'photo (8).jpg', 'photo (9).jpg'].map((src, index) => (
                                <motion.div
                                    key={index}
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.2 * index, ease: "easeOut" }}
                                >
                                    <Image
                                        src={`/images/${src}`}
                                        alt={`Description of image ${index + 1}`}
                                        width={1000}
                                        height={760}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Photo;

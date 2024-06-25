

"use client";
import React from "react";
import Header from '/components/Header.js'
import Image from 'next/image';
import { motion } from 'framer-motion';



function Photo() {
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
                    <div className="grid grid-cols-2 gap-4 rounded">
                        <Image
                            src="/images/photo (1).jpg"
                            alt="Description of image 1"
                            width={1000}
                            height={760}
                            className="w-full h-auto rounded-lg"
                        />
                        <Image
                            src="/images/photo (2).jpg"
                            alt="Description of image 2"
                            width={1000}
                            height={760}
                            className="w-full h-auto rounded-lg"
                        />
                        <Image
                            src="/images/photo (3).jpg"
                            alt="Description of image 3"
                            width={1000}
                            height={760}
                            className="w-full h-auto rounded-lg"
                        />
                        <Image
                            src="/images/photo (4).jpg"
                            alt="Description of image 4"
                            width={1000}
                            height={760}
                            className="w-full h-auto rounded-lg"
                        />
                        <Image
                            src="/images/photo (5).jpg"
                            alt="Description of image 4"
                            width={1000}
                            height={760}
                            className="w-full h-auto rounded-lg"
                        />
                        <Image
                            src="/images/photo (6).jpg"
                            alt="Description of image 4"
                            width={1000}
                            height={760}
                            className="w-full h-auto rounded-lg"
                        />
                        <Image
                            src="/images/photo (7).jpg"
                            alt="Description of image 4"
                            width={1000}
                            height={760}
                            className="w-full h-auto rounded-lg"
                        />
                        <Image
                            src="/images/photo (8).jpg"
                            alt="Description of image 4"
                            width={1000}
                            height={760}
                            className="w-full h-auto rounded-lg"
                        />
                        <Image
                            src="/images/photo (9).jpg"
                            alt="Description of image 4"
                            width={1000}
                            height={760}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </motion.div>
            </div>

        </div>
    );
}

export default Photo;
"use client";

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '../components/Header.js';
import Image from 'next/image';
import Link from 'next/link';
import Mizuyari from '../components/Mizuyari.js';
import Shikumi from '../components/Shikumi.js';
import { motion } from 'framer-motion';

export default function Home() {



  return (

    <div className="font-sans mx-auto bg-[#547443] text-white">
      <Header />

      <Head>
        <title>ハイテクガーデン</title>
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}

        exit={{ opacity: 0 }} >


        <div className="flex items-center justify-center ">
          <Image
            src="/images/yasai.jpg"
            alt="Scenic garden view"
            //className="w-full h-80 object-cover"
            width={1000}
            height={760}
          />
        </div>
        <div className="p-6">

          <h3 className="text-lg font-semibold mb-4">現在の畑情報</h3>
          <div className="grid grid-cols-2 gap-4 mb-6 ">
            <div className="border rounded-lg p-4 bg-[#6e8b5e]">
              <i className="fas fa-thermometer-half text-xl mb-2"></i>
              <p className="text-xl">23°C</p>
              <p className="text-white ">気温</p>
            </div>
            <div className="border rounded-lg p-4 bg-[#6e8b5e]">
              <i className="fas fa-tint text-xl mb-2"></i>
              <p className="text-xl">51%</p>
              <p className="text-white">土壌湿度</p>
            </div>
          </div>


          <Mizuyari />
          <Shikumi />


          <p className="text-2xl mb-3">ハイテクガーデンとは？</p>
          <p className="text-base">
            間接的な体験から農業への意識を高めることを目的としたスマート農業
          </p>
        </div>

        <style jsx global>{`
        .stroke-black {
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
        h1 {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
        }
      `}</style>

      </motion.div>




    </div>
  );
}

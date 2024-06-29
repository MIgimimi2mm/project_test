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
import Photo from '../components/Photo.js';
import Garden from '../components/Garden.js';
import { useEffect, useState } from 'react';



export default function Home() {

  const [temperature, setTemperature] = useState(null);

  useEffect(() => {


    async function fetchSoilMoisture() {
      const res = await fetch('https://smart.tcpexposer.com/info');
      const data = await res.json();
      setSoilMoisture(data.soil_moisture);
    }

    async function fetchWeather() {
      const res = await fetch('https://smart.tcpexposer.com/weather');
      const data = await res.json();
      setWeatherData(data.weather_data);
    }

    fetchSoilMoisture();
    fetchWeather();

  }, []);

  //a

  return (

    <div className="font-sans mx-auto bg-[#547443] text-white">
      <Header />

      <Head>
        <title>ハイテクガーデン</title>
      </Head>

      <motion.div
        key="photo-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2, duration: 0.5 }}
      >


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

          <h3 className="text-lg font-semibold mb-1">現在の畑情報</h3>
          <div className="grid grid-cols-2 gap-4 mb-6 ">
            <div className="border rounded-lg p-4 bg-[#6e8b5e]">
              <i className="fas fa-thermometer-half text-xl mb-2"></i>
              {temperature !== null ? (
                <p className="text-xl">{weatherData}°C</p>
              ) : (
                <p className="text-xl">？°C</p>
              )}
              <p className="text-white ">気温</p>
            </div>
            <div className="border rounded-lg p-4 bg-[#6e8b5e]">
              <i className="fas fa-tint text-xl mb-2"></i>
              <p className="text-xl">？</p>
              <p className="text-white">土壌湿度</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-1">MENU</h3>




          <Mizuyari />
          <Garden />
          <Shikumi />
          <Photo />



          {/*
          <p className="text-2xl mb-3">ハイテクガーデンとは？</p>
          <p className="text-base">
            間接的な体験から農業への意識を高めることを目的としたスマート農業
          </p>
          */}
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

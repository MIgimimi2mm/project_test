import Link from 'next/link';
import Header from '/components/Header.js'
import Image from 'next/image';
import { motion } from "framer-motion";
import css from "styled-jsx/css";
import { useState, useEffect } from 'react';
import Icon_bar from '../../components/Icon_bar';

export default function Water() {
    const [clickCount, setClickCount] = useState(0);
    const [inputText, setInputText] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchClickCount();
        fetchMessage();
    }, []);

    const fetchClickCount = async () => {
        try {
            const response = await fetch('https://pj-back.onrender.com/click-count');
            const data = await response.json();
            setClickCount(data.count);
        } catch (error) {
            console.error('Error fetching click count:', error);
        }
    };

    const handleClick = async () => {
        try {
            const response = await fetch('https://smart.tcpexposer.com/led', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setClickCount(data.count);
        } catch (error) {
            console.error('Error incrementing click count:', error);
        }
    };

    const fetchMessage = async () => {
        try {
            const response = await fetch('https://pj-back.onrender.com');
            const data = await response.text();
            setMessage(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://smart.tcpexposer.com/led', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputText }),
            });
            const data = await response.json();
            setMessage(data.message);
            setInputText('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="font-sans mx-auto">

                <Header />

                <div className="flex justify-center min-h-screen bg-[#547443] p-6 text-white ">


                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        exit={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="w-full h-full flex flex-col items-center justify-center "
                    >
                        <div className="flex flex-col items-center justify-center w-full">
                            <div class=" mb-12">
                                <Icon_bar />
                            </div>
                        </div>

                        <h1 className="text-4xl font-bold mb-4 text-center">
                            下のアイコンをタップ！
                        </h1>
                        <Link href="/directory/thanks" scroll={false}>
                            <div className="wrapper">
                                <motion.button
                                    whileTap={{ scale: 1.3 }}
                                    className="border w-[300px] h-[300px] rounded-full bg-[#6e8b5e] flex items-center justify-center"
                                    onClick={handleClick}
                                >
                                    <img
                                        src="/images/jouro1.png"
                                        alt="funnel inside a round icon"
                                        className="w-[250px] h-[250px] rounded-full"
                                    />
                                </motion.button>
                            </div>
                        </Link>
                    </motion.div>

                </div>
            </div>

            {styles}
        </>
    );
}

const { className, styles } = css.resolve`
  .wrapper {
    margin: 0;
    padding: 0;
  }
  button {
    margin: 10px;
  }
`;

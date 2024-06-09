
import Link from 'next/link';
import Header from '/components/Header.js'
import Image from 'next/image';

import styles from '/styles/Home.module.css';
import { useState, useEffect } from 'react';

export default function Water() {

    const [inputText, setInputText] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchMessage();
    }, []);

    const fetchMessage = async () => {
        try {
            const response = await fetch('https://project-test-back.onrender.com');
            const data = await response.text();
            setMessage(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://project-test-back.onrender.com/message', {
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

                <div className="flex items-center justify-center ">
                    <Image
                        src="/images/pachinko.png"
                        alt="Scenic garden view"
                        //className="w-full h-80 object-cover"
                        width={1000}
                        height={760}
                    />



                </div>

            </div>

        </>
    );
}
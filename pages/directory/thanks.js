import Header from '/components/Header.js'
import { motion } from 'framer-motion';



export default function Thanks() {


    return (
        <>
            <div className="font-sans mx-auto">

                <Header />


                <div className="flex justify-center min-h-screen bg-[#547443] p-6 text-white ">
                    <motion.div
                        key="photo-page"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.2, duration: 0.5 }}
                    >

                        <h1 className="text-4xl font-bold mb-4 text-center">
                            水やりありがとちゃ～ん♡
                        </h1>
                    </motion.div>

                </div>
            </div>

        </>
    );

}
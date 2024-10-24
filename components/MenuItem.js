import React from "react";
import { motion } from "framer-motion";
import styles from '../styles/menu.module.css';


const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const text = ["水をあげる", "説明をみる", "仕組みを知る", "ギャラリー", "Item 5"];
const links = ["/directory/water", "/directory/garden", "/directory/logic", "/directory/photo", "/item5"]; // 各リンクを定義



const MenuItem = ({ i }) => {
    const style = { border: `2px solid ${colors[i]}` };
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="icon-placeholder" />
            <div className={styles.textplaceholder} >
                <a href={links[i]} style={{ textDecoration: "none", color: "inherit" }}>  {/* リンクを設定 */}

                    {text[i]}
                </a>

            </div>
        </motion.li>
    );
};

export default MenuItem;

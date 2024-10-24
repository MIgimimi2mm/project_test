import React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 90%)"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle = ({ toggle }) => (
    <button onClick={toggle} style={{ zIndex: 10, position: 'relative' }}>
        <svg width="23" height="23" viewBox="0 0 23 23" style={{ transform: "translate(29.5px, -369px)" }}>
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },

                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </svg>
    </button>
);

export default MenuToggle;

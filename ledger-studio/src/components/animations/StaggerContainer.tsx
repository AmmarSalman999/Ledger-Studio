"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    delayChildren?: number;
    staggerChildren?: number;
}

export function StaggerContainer({
    children,
    className = "",
    delayChildren = 0,
    staggerChildren = 0.1
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                visible: {
                    transition: {
                        delayChildren,
                        staggerChildren
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode, className?: string }) {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div variants={variants} className={className}>
            {children}
        </motion.div>
    );
}

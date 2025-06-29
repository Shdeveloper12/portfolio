import { animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from 'react';

import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [visible, setvisible] = useState(false);

    useEffect(() =>{

        const toggleVisible = () => {
            if(window.scrollY > 300){
                setvisible(true);
            }else{
                setvisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisible);
        return () => window.removeEventListener("scroll", toggleVisible);

    }, []);

    const scrollToTop = () =>{
        scroll.scrollToTop({
            duration: 500,
            smooth: true,
        });
    }
    return (
       visible && (
        <button 
        onClick={scrollToTop}
        className='fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-lg hover:scale-110 transition'
        aria-label='Scroll to top'
        >
            <FaArrowUp size={20} />
        </button>
       )
    );
};

export default ScrollToTop;
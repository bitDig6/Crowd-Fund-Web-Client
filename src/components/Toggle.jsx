import React, { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Toggle = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const html = document.querySelector('html');
        const theme = html.getAttribute('data-theme');
        if (theme === 'dark') {
            setToggle(true);
        }
        if (theme === 'light') {
            setToggle(false);
        }

    }, []);

    const handleDarkMode = () => {
        const html = document.querySelector('html');
        html.setAttribute("data-theme", "dark");
        setToggle(!toggle);
    }

    const handleLightMode = () => {
        const html = document.querySelector('html');
        html.setAttribute("data-theme", "light");
        setToggle(!toggle);
    }

    return (
        <div className='w-4/5 mx-auto my-10 flex justify-end'>
            {
                toggle ?
                    <button data-tooltip-id='toggle-tooltip' data-tooltip-content="Click to switch between dark mode and light mode" onClick={handleLightMode} className='btn bg-white text-black rounded-full'>
                        <MdOutlineLightMode></MdOutlineLightMode> Light Mode
                    </button>
                    : <button data-tooltip-id='toggle-tooltip' data-tooltip-content="Click to switch between dark mode and light mode" onClick={handleDarkMode} className='btn bg-black text-white rounded-full'>
                        <MdOutlineDarkMode></MdOutlineDarkMode> Dark Mode
                    </button>
            }
            <Tooltip id='toggle-tooltip'></Tooltip>
        </div>
    );
};

export default Toggle;
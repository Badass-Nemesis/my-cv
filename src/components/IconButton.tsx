// 'use client'

// import Image from "next/image";
// import { useTheme } from "./ThemeContext";

// interface IconButtonInterface {
//     link: string;
//     darkModeIconSrc: string;
//     lightModeIconSrc: string;
// }

// export default function IconButton({ link, darkModeIconSrc, lightModeIconSrc }: IconButtonInterface) {
//     const { theme } = useTheme();

//     return (
//         <button className="icon-btn">
//             <Image src={theme == 'dark' ? darkModeIconSrc : lightModeIconSrc} alt='darkIcon' width={20} height={20} />
//         </button>
//     );
// }

'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from "./ThemeContext";
import Image from 'next/image';

interface IconButtonInterface {
    link: string;
    iconSrc: string;
}

export default function IconButton({ link, iconSrc }: IconButtonInterface) {
    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Set the initial state based on the theme
        setIsDarkMode(theme === 'dark');
    }, [theme]);

    return (
        <a href={link} className="icon-btn" target="_blank" rel="noopener noreferrer">
            <Image
                src={iconSrc}
                alt="icon"
                width={20}
                height={20}
                style={{ filter: isDarkMode ? 'invert(100%)' : 'none' }}
            />
        </a>
    );
}

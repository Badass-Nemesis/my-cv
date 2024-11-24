import Image from "next/image";

interface IconButtonInterface {
    link: string;
    darkModeIconSrc: string;
    lightModeIconSrc: string;
}

export default function IconButton({ link, darkModeIconSrc, lightModeIconSrc }: IconButtonInterface) {
    const darkMode = true;

    return (
        <div>
            {darkMode ? (
                <button className="icon-btn">
                    <Image src={darkModeIconSrc} alt='darkIcon' width={20} height={20} />
                </button>
            ) : (
                <button className="icon-btn">
                    <Image src={lightModeIconSrc} alt='lightIcon' width={20} height={20} />
                </button>
            )}
        </div>
    );
}
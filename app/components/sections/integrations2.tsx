"use client"
import {useState} from "react"
import {AnimatePresence, motion} from "framer-motion"
import container from "@/public/Container.png"

import one from "@/public/integrationImages/one.png"
import two from "@/public/integrationImages/two.png"
import three from "@/public/integrationImages/three.png"
import four from "@/public/integrationImages/four.png"
import five from "@/public/integrationImages/five.png"
import six from "@/public/integrationImages/six.png"
import seven from "@/public/integrationImages/seven.png"
import eight from "@/public/integrationImages/two.png"
import nine from "@/public/integrationImages/eight.png"
import Image from "next/image";

const items = [
    {
        name: "Text Generations",
        image: (
            <Image src={one} alt={``} className={`object-center bg-center py-8 px-2 tablet:p-6`} fill />
        )
    },
    {
        name: "Web Search",
        image: (
            <div className={`w-full h-full flex items-center justify-center`}>
                <Image src={two} alt={``} className={`h-[218px] w-[337px]`} />
            </div>
        )
    },
    {
        name: "Deep Research",
        image: (
            <div className={`w-full h-full flex items-center justify-center`}>
                <div className={`relative h-[476px] w-[368px]`}>
                    <Image src={three} alt={``} className={`absolute bottom-0 object-center`} />
                </div>
            </div>
        )
    },
    {
        name: "Image Generation",
        image: (
            <div className={`h-full w-full flex items-center justify-center`}>
                <Image src={four} alt={``} className={`absolute object-center bg-center p-6`} fill />
            </div>
        )
    },
    {
        name: "Video Generation",
        image: (
            <div className={`w-full h-full flex items-center justify-center`}>
                <div className={`relative h-[187px] w-[393px]`}>
                    <Image src={five} alt={``} className={`absolute bottom-0 object-center`} />
                </div>
            </div>
        )
    },
    {
        name: "OCR + File Intelligence",
        image: (
            <div className={`w-full h-full flex items-end`}>
                <div className={`relative bottom-0 h-[70%] w-full`}>
                    <Image src={six} alt={``} className={`absolute bottom-0 bg-center object-center`} fill />
                </div>
            </div>
        )
    },
    {
        name: "Agents with Tools",
        image: (
            <div className={`h-full w-full flex items-center justify-center`}>
                <Image src={seven} alt={``} className={`object-center bg-center p-6`} />
            </div>
        )
    },
    {
        name: "Agents with MCP",
        image: (
            <div className={`w-full h-full flex items-center justify-center`}>
                <div className={`relative h-[187px] w-[393px]`}>
                    <Image src={five} alt={``} className={`absolute bottom-0 object-center`} />
                </div>
            </div>
        )
    },
    {
        name: "Multi-step Workflows",
        image: (
            <div className={`w-full h-full flex items-center justify-center`}>
                <Image src={nine} alt={``} className={`object-center bg-center p-14`} fill />
            </div>
        )
    }
]

const Integrations2 = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0)

    return (
        <div className={`w-full flex flex-col gap-y-20 p-5 tablet:p-10 laptop:p-25 desktop:p-[120px]`}>
            <div className={`w-full h-full flex flex-col items-center gap-y-20`}>

                <div
                    className={`w-full flex flex-col items-center gap-y-[24px] max-w-[330px] tablet:max-w-[430px] laptop:max-w-[525px]`}>
                    <svg width="135" height="38" viewBox="0 0 135 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_ddii_597_3100)">
                            <path
                                d="M2.5 9.5C2.5 5.08172 6.08172 1.5 10.5 1.5H124.5C128.918 1.5 132.5 5.08172 132.5 9.5V26.5C132.5 30.9183 128.918 34.5 124.5 34.5H10.5C6.08172 34.5 2.5 30.9183 2.5 26.5V9.5Z"
                                fill="white"/>
                            <path
                                d="M2.5 9.5C2.5 5.08172 6.08172 1.5 10.5 1.5H124.5C128.918 1.5 132.5 5.08172 132.5 9.5V26.5C132.5 30.9183 128.918 34.5 124.5 34.5H10.5C6.08172 34.5 2.5 30.9183 2.5 26.5V9.5Z"
                                fill="url(#paint0_linear_597_3100)"/>
                            <path opacity="0.1"
                                  d="M23.293 16.3809C23.4589 16.92 23.8683 17.3502 24.3984 17.543L26.2354 18.2109L24.3984 18.8789C23.8683 19.0717 23.4588 19.5018 23.293 20.041L22.6006 22.29L21.9092 20.041C21.7432 19.5018 21.3339 19.0717 20.8037 18.8789L18.9658 18.2109L20.8037 17.543C21.3339 17.3502 21.7432 16.92 21.9092 16.3809L22.6006 14.1309L23.293 16.3809Z"
                                  fill="#FAF7F6" stroke="#514443" stroke-width="0.933333"/>
                            <path
                                d="M27.2683 18.1213L24.5586 19.1067C24.1658 19.2495 23.8627 19.5682 23.7399 19.9677L22.7042 23.3335C22.6731 23.4345 22.5302 23.4345 22.4991 23.3335L21.4635 19.9677C21.3405 19.5682 21.0375 19.2495 20.6447 19.1067L17.935 18.1213C17.8218 18.0802 17.8218 17.9201 17.935 17.8789L20.6447 16.8935C21.0375 16.7507 21.3405 16.4321 21.4635 16.0326L22.4991 12.6668C22.5302 12.5658 22.6731 12.5658 22.7042 12.6668L23.7399 16.0326C23.8627 16.4321 24.1658 16.7507 24.5586 16.8935L27.2683 17.8789C27.3815 17.9201 27.3815 18.0802 27.2683 18.1213Z"
                                fill="#FAF7F6" stroke="#514443" stroke-width="0.933333" stroke-linecap="round"
                                stroke-linejoin="round"/>
                            <path
                                d="M15.7671 13.5003C16.0819 13.6052 16.3288 13.8522 16.4338 14.1669C16.4872 14.3271 16.7137 14.3271 16.7671 14.1669C16.872 13.8522 17.119 13.6052 17.4338 13.5003C17.5939 13.4469 17.5939 13.2203 17.4338 13.1669C17.119 13.062 16.872 12.815 16.7671 12.5003C16.7137 12.3401 16.4872 12.3401 16.4338 12.5003C16.3288 12.815 16.0819 13.062 15.7671 13.1669C15.6069 13.2203 15.6069 13.4469 15.7671 13.5003Z"
                                fill="#FAF7F6" stroke="#514443" stroke-width="0.933333" stroke-linecap="round"
                                stroke-linejoin="round"/>
                            <path
                                d="M18.1008 22.8333C17.786 22.9382 17.539 23.1852 17.4341 23.5C17.3807 23.6602 17.1541 23.6602 17.1008 23.5C16.9958 23.1852 16.7488 22.9382 16.4341 22.8333C16.2739 22.7799 16.2739 22.5534 16.4341 22.5C16.7488 22.395 16.9958 22.148 17.1008 21.8333C17.1541 21.6731 17.3807 21.6731 17.4341 21.8333C17.539 22.148 17.786 22.395 18.1008 22.5C18.2609 22.5534 18.2609 22.7799 18.1008 22.8333Z"
                                fill="#FAF7F6" stroke="#514443" stroke-width="0.933333" stroke-linecap="round"
                                stroke-linejoin="round"/>
                            <path
                                d="M36.16 23.5H34.704V13.294H36.16V23.5ZM39.0631 23.5V15.618H40.3791L40.4631 16.808C41.1165 15.9213 41.9751 15.478 43.0391 15.478C43.8325 15.478 44.4811 15.7067 44.9851 16.164C45.4985 16.612 45.7551 17.3027 45.7551 18.236V23.5H44.3271V18.376C44.3271 17.8813 44.1871 17.4893 43.9071 17.2C43.6271 16.9107 43.2025 16.766 42.6331 16.766C42.2505 16.766 41.8958 16.85 41.5691 17.018C41.2425 17.1767 40.9811 17.41 40.7851 17.718C40.5985 18.026 40.5051 18.3947 40.5051 18.824V23.5H39.0631ZM50.255 23.598C49.1817 23.598 48.645 23.1547 48.645 22.268V16.738H47.595V15.618H48.645V13.42L50.045 13.28V15.618H51.319V16.738H50.045V21.68C50.045 21.9693 50.087 22.1607 50.171 22.254C50.2644 22.3473 50.4417 22.394 50.703 22.394C50.9737 22.394 51.179 22.3753 51.319 22.338V23.486C51.1137 23.5233 50.9224 23.5513 50.745 23.57C50.5677 23.5887 50.4044 23.598 50.255 23.598ZM56.6744 23.64C55.9184 23.64 55.2557 23.4813 54.6864 23.164C54.1264 22.8373 53.6877 22.3707 53.3704 21.764C53.0624 21.1573 52.9084 20.4247 52.9084 19.566C52.9084 18.7447 53.053 18.0307 53.3424 17.424C53.641 16.808 54.0657 16.332 54.6164 15.996C55.167 15.6507 55.8344 15.478 56.6184 15.478C57.365 15.478 58.009 15.6413 58.5504 15.968C59.101 16.2947 59.5164 16.7893 59.7964 17.452C60.0764 18.1053 60.1837 18.9267 60.1184 19.916H54.3364C54.383 20.7653 54.607 21.4 55.0084 21.82C55.419 22.24 55.979 22.45 56.6884 22.45C57.267 22.45 57.7337 22.3193 58.0884 22.058C58.443 21.7967 58.6624 21.4327 58.7464 20.966L60.0204 21.26C59.8804 21.9693 59.5117 22.5433 58.9144 22.982C58.3264 23.4207 57.5797 23.64 56.6744 23.64ZM56.5904 16.612C56.0117 16.612 55.517 16.7893 55.1064 17.144C54.705 17.4893 54.4577 18.054 54.3644 18.838H58.6484C58.6577 18.166 58.4804 17.6293 58.1164 17.228C57.7617 16.8173 57.253 16.612 56.5904 16.612ZM65.4345 25.964C64.5105 25.964 63.7732 25.7633 63.2225 25.362C62.6812 24.9607 62.3732 24.4333 62.2985 23.78L63.6005 23.472C63.6472 23.9853 63.8525 24.3447 64.2165 24.55C64.5805 24.7647 65.0099 24.872 65.5045 24.872C66.1485 24.872 66.6665 24.718 67.0585 24.41C67.4505 24.1113 67.6465 23.6167 67.6465 22.926V21.498C67.4039 21.9273 67.0725 22.24 66.6525 22.436C66.2325 22.6227 65.7425 22.716 65.1825 22.716C64.5199 22.716 63.9412 22.5667 63.4465 22.268C62.9612 21.9693 62.5879 21.554 62.3265 21.022C62.0652 20.4807 61.9345 19.8507 61.9345 19.132C61.9345 18.4227 62.0605 17.7927 62.3125 17.242C62.5739 16.6913 62.9425 16.262 63.4185 15.954C63.8945 15.6367 64.4592 15.478 65.1125 15.478C65.6912 15.478 66.2045 15.6087 66.6525 15.87C67.1099 16.122 67.4412 16.472 67.6465 16.92L67.7305 15.618H69.0605V22.898C69.0605 23.8127 68.7619 24.55 68.1645 25.11C67.5765 25.6793 66.6665 25.964 65.4345 25.964ZM65.4905 21.666C65.9199 21.666 66.2932 21.568 66.6105 21.372C66.9372 21.1667 67.1892 20.896 67.3665 20.56C67.5532 20.2147 67.6465 19.8273 67.6465 19.398V18.866C67.6465 18.2313 67.4412 17.7087 67.0305 17.298C66.6292 16.878 66.1019 16.668 65.4485 16.668C64.7952 16.668 64.2912 16.8967 63.9365 17.354C63.5819 17.802 63.4045 18.3993 63.4045 19.146C63.4045 19.8833 63.5819 20.49 63.9365 20.966C64.2912 21.4327 64.8092 21.666 65.4905 21.666ZM71.7362 23.5V15.618H73.0242L73.1082 16.78C73.3135 16.3787 73.5749 16.0707 73.8922 15.856C74.2189 15.6413 74.5922 15.534 75.0122 15.534C75.3015 15.534 75.5162 15.562 75.6562 15.618V16.976H75.5582C75.4089 16.92 75.2269 16.892 75.0122 16.892C74.4802 16.892 74.0509 17.0553 73.7242 17.382C73.4069 17.7087 73.2249 18.1473 73.1782 18.698V23.5H71.7362ZM79.5284 23.64C78.7071 23.64 78.0677 23.4393 77.6104 23.038C77.1624 22.6273 76.9384 22.0953 76.9384 21.442C76.9384 20.9193 77.0551 20.4947 77.2884 20.168C77.5311 19.8413 77.8437 19.5893 78.2264 19.412C78.6091 19.2253 79.0244 19.09 79.4724 19.006L81.1244 18.698C81.5444 18.6233 81.8197 18.5113 81.9504 18.362C82.0811 18.2033 82.1464 17.998 82.1464 17.746C82.1464 17.4193 82.0297 17.1487 81.7964 16.934C81.5631 16.71 81.1384 16.598 80.5224 16.598C79.9251 16.598 79.4491 16.7147 79.0944 16.948C78.7397 17.1813 78.5671 17.5407 78.5764 18.026L77.2184 17.886C77.2371 17.1113 77.5451 16.5187 78.1424 16.108C78.7491 15.688 79.5424 15.478 80.5224 15.478C81.5024 15.478 82.2537 15.674 82.7764 16.066C83.3084 16.458 83.5744 17.0553 83.5744 17.858V21.834C83.5744 22.114 83.6257 22.296 83.7284 22.38C83.8311 22.464 83.9431 22.506 84.0644 22.506C84.1391 22.506 84.1951 22.506 84.2324 22.506C84.2697 22.4967 84.2931 22.4873 84.3024 22.478H84.3864V23.5C84.2931 23.5373 84.1671 23.5653 84.0084 23.584C83.8591 23.6027 83.7471 23.612 83.6724 23.612C83.2711 23.612 82.9444 23.514 82.6924 23.318C82.4497 23.122 82.3284 22.8233 82.3284 22.422V22.17C82.1324 22.6087 81.7777 22.9633 81.2644 23.234C80.7511 23.5047 80.1724 23.64 79.5284 23.64ZM79.8924 22.492C80.4524 22.492 80.9331 22.3753 81.3344 22.142C81.7451 21.8993 82.0204 21.5633 82.1604 21.134V19.496C82.0484 19.552 81.8991 19.6033 81.7124 19.65C81.5351 19.6967 81.3064 19.748 81.0264 19.804L79.8644 20.042C79.2764 20.1633 78.8844 20.3407 78.6884 20.574C78.5017 20.8073 78.4084 21.0593 78.4084 21.33C78.4084 21.7313 78.5484 22.0253 78.8284 22.212C79.1084 22.3987 79.4631 22.492 79.8924 22.492ZM88.1535 23.598C87.0802 23.598 86.5435 23.1547 86.5435 22.268V16.738H85.4935V15.618H86.5435V13.42L87.9435 13.28V15.618H89.2175V16.738H87.9435V21.68C87.9435 21.9693 87.9855 22.1607 88.0695 22.254C88.1628 22.3473 88.3402 22.394 88.6015 22.394C88.8722 22.394 89.0775 22.3753 89.2175 22.338V23.486C89.0122 23.5233 88.8208 23.5513 88.6435 23.57C88.4662 23.5887 88.3028 23.598 88.1535 23.598ZM91.6506 23.5V15.618H93.0926V23.5H91.6506ZM91.7206 14.316V12.496H93.0366V14.316H91.7206ZM99.306 23.64C98.5407 23.64 97.8733 23.472 97.304 23.136C96.744 22.7907 96.31 22.3147 96.002 21.708C95.694 21.1013 95.54 20.392 95.54 19.58C95.54 18.7493 95.694 18.0307 96.002 17.424C96.3193 16.808 96.758 16.332 97.318 15.996C97.8873 15.6507 98.55 15.478 99.306 15.478C100.062 15.478 100.72 15.6507 101.28 15.996C101.84 16.332 102.274 16.808 102.582 17.424C102.89 18.0307 103.044 18.7447 103.044 19.566C103.044 20.3873 102.89 21.106 102.582 21.722C102.274 22.3287 101.84 22.8 101.28 23.136C100.72 23.472 100.062 23.64 99.306 23.64ZM99.292 22.408C100.02 22.408 100.585 22.156 100.986 21.652C101.397 21.148 101.602 20.448 101.602 19.552C101.602 18.6467 101.397 17.9467 100.986 17.452C100.585 16.9573 100.025 16.71 99.306 16.71C98.5687 16.71 97.9947 16.9667 97.584 17.48C97.1827 17.984 96.982 18.6793 96.982 19.566C96.982 20.462 97.1827 21.162 97.584 21.666C97.9947 22.1607 98.564 22.408 99.292 22.408ZM105.314 23.5V15.618H106.63L106.714 16.808C107.368 15.9213 108.226 15.478 109.29 15.478C110.084 15.478 110.732 15.7067 111.236 16.164C111.75 16.612 112.006 17.3027 112.006 18.236V23.5H110.578V18.376C110.578 17.8813 110.438 17.4893 110.158 17.2C109.878 16.9107 109.454 16.766 108.884 16.766C108.502 16.766 108.147 16.85 107.82 17.018C107.494 17.1767 107.232 17.41 107.036 17.718C106.85 18.026 106.756 18.3947 106.756 18.824V23.5H105.314ZM117.51 23.64C116.521 23.64 115.727 23.4113 115.13 22.954C114.533 22.4967 114.22 21.8667 114.192 21.064L115.592 20.91C115.592 21.3953 115.769 21.792 116.124 22.1C116.479 22.408 116.955 22.562 117.552 22.562C118.065 22.562 118.476 22.4733 118.784 22.296C119.101 22.1093 119.26 21.8013 119.26 21.372C119.26 21.0267 119.153 20.7747 118.938 20.616C118.733 20.448 118.448 20.3267 118.084 20.252C117.72 20.168 117.314 20.0793 116.866 19.986C116.063 19.8087 115.471 19.5427 115.088 19.188C114.715 18.824 114.528 18.3387 114.528 17.732C114.528 17.0507 114.799 16.5047 115.34 16.094C115.881 15.6833 116.605 15.478 117.51 15.478C118.425 15.478 119.162 15.6787 119.722 16.08C120.282 16.4813 120.585 17.0833 120.632 17.886L119.246 18.068C119.246 17.6107 119.101 17.242 118.812 16.962C118.523 16.682 118.075 16.542 117.468 16.542C116.992 16.542 116.623 16.6447 116.362 16.85C116.11 17.046 115.984 17.3027 115.984 17.62C115.984 18.0213 116.157 18.3107 116.502 18.488C116.857 18.6653 117.421 18.8287 118.196 18.978C118.728 19.0713 119.181 19.202 119.554 19.37C119.937 19.538 120.231 19.776 120.436 20.084C120.641 20.392 120.744 20.8073 120.744 21.33C120.744 22.0207 120.478 22.5807 119.946 23.01C119.423 23.43 118.611 23.64 117.51 23.64Z"
                                fill="#514443"/>
                        </g>
                        <defs>
                            <filter id="filter0_ddii_597_3100" x="0" y="0" width="135" height="38"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="1"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.4 0 0 0 0 0.359477 0 0 0 0 0.321569 0 0 0 0.06 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_597_3100"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="1.25"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.0941176 0 0 0 0 0.0738562 0 0 0 0 0.054902 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="effect1_dropShadow_597_3100"
                                         result="effect2_dropShadow_597_3100"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_597_3100"
                                         result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="0.75"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.0941176 0 0 0 0 0.0738562 0 0 0 0 0.054902 0 0 0 0.32 0"/>
                                <feBlend mode="normal" in2="shape" result="effect3_innerShadow_597_3100"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="-1"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.0941176 0 0 0 0 0.0738562 0 0 0 0 0.054902 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="effect3_innerShadow_597_3100"
                                         result="effect4_innerShadow_597_3100"/>
                            </filter>
                            <linearGradient id="paint0_linear_597_3100" x1="67.5" y1="1.5" x2="67.5" y2="34.5"
                                            gradientUnits="userSpaceOnUse">
                                <stop offset="0.05" stop-color="#EAE0D7"/>
                                <stop offset="1" stop-color="#F6F2EF"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className={`flex flex-col gap-y-[14px]`}>
                        <div
                            className={`font-grotesk font-medium text-[22px] tablet:text-[26px] laptop:text-[36px] leading-[128%] tracking-[-2%] text-center`}>Build
                            with agentic intelligence — in minutes, not months.
                        </div>

                        <div
                            className={`font-grotesk text-[#666666] text-center text-[14px] tablet:text-[16px] leading-[150%] tracking-[-2%]`}>
                            A production-ready API with reliable function calling, deep reasoning, high throughput, and
                            affordable token pricing.
                        </div>
                    </div>
                </div>

                <div className={`w-full max-w-[450px] tablet:max-w-[816px] flex flex-col items-center tablet:items-start gap-y-[24px] tablet:gap-y-0 tablet:flex-row tablet:gap-x-[24px] laptop:gap-x-[32px]`}>
                    <div className={`w-full tablet:w-[224px] flex flex-col gap-y-[2px] p-1 bg-[#D5D5D5]/30 text-[#666] rounded-[16px]`}>
                        {
                            items.map((e, index) => {
                                const isActive = activeIndex === index;

                                return (
                                    <motion.div
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`
                                        cursor-pointer select-none
                                        font-grotesk text-center text-[15px]
                                        px-[14px] py-[12px]
                                        rounded-[12px]
                                        transition-colors duration-200
                                        overflow-hidden
                                        ${isActive ? ` bg-white border border-[#18181B]/6 text-black shadow-[0_0_0_1px_rgba(14,63,126,0.06),0_1px_1px_-0.5px_rgba(42,51,70,0.03),0_3px_3px_-1.5px_rgba(42,51,70,0.05),0_5px_5px_-2.5px_rgba(42,51,70,0.03),0_16px_16px_-8px_rgba(42,51,70,0.04)]` : `border-none`}`}>
                                        {e.name}
                                    </motion.div>
                                )
                            })
                        }
                    </div>

                    <div style={{ backgroundImage: `url(${container.src})` }} className={`relative bg-cover bg-center rounded-[34px] overflow-hidden  h-[450px] tablet:h-[508px] w-full tablet:w-[540px] laptop:w-[560px]`}>
                        <AnimatePresence mode="wait">
                            {activeIndex !== null && (
                                <motion.div
                                    key={activeIndex}
                                    initial={{
                                        opacity: 0,
                                        filter: "blur(6px)",
                                        y: 6,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        filter: "blur(0px)",
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        filter: "blur(6px)",
                                        y: -6,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeOut",
                                    }}
                                    className="relative h-full w-full"
                                >
                                    {items[activeIndex].image}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Integrations2
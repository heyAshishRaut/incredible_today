"use client"
import {useState} from "react"
import {motion, AnimatePresence} from "framer-motion"

const items = [
    {
        question: "What is Incredible?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "What makes Incredible different from other AI Assistants?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "Is my data secure?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "How do you prevent hallucinations?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "Can Incredible take multiple actions at once?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "What kind of task can Incredible handle?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "Can Incredible work with my existing data?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "Is there a free trial?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "How do I get help?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "What apps and tools are integrated?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    }
]

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index))
    }

    return (
        <div className={`w-full p-[20px] tablet:p-[40px] laptop:p-[100px] desktop:p-[120px]`}>
            <div className={`w-full flex flex-col gap-y-[20px] items-center tablet:gap-y-[40px] laptop:gap-y-[60px]`}>
                <div className={`w-full tablet:w-[550px] flex flex-col gap-y-[16px] items-center p-[10px]`}>
                    <svg width="77" height="38" viewBox="0 0 77 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_ddii_597_5009)">
                            <g clip-path="url(#clip0_597_5009)">
                                <path
                                    d="M2.5 9.5C2.5 5.08172 6.08172 1.5 10.5 1.5H66.5C70.9183 1.5 74.5 5.08172 74.5 9.5V26.5C74.5 30.9183 70.9183 34.5 66.5 34.5H10.5C6.08172 34.5 2.5 30.9183 2.5 26.5V9.5Z"
                                    fill="white"/>
                                <path
                                    d="M2.5 9.5C2.5 5.08172 6.08172 1.5 10.5 1.5H66.5C70.9183 1.5 74.5 5.08172 74.5 9.5V26.5C74.5 30.9183 70.9183 34.5 66.5 34.5H10.5C6.08172 34.5 2.5 30.9183 2.5 26.5V9.5Z"
                                    fill="url(#paint0_linear_597_5009)"/>
                                <g clip-path="url(#clip1_597_5009)">
                                    <path opacity="0.1"
                                          d="M23.5264 14.1709C23.6923 14.71 24.1017 15.1402 24.6318 15.333L26.4688 16.001L24.6318 16.6689C24.1017 16.8618 23.6922 17.2918 23.5264 17.8311L22.834 20.0801L22.1426 17.8311C21.9766 17.2918 21.5673 16.8617 21.0371 16.6689L19.1992 16.001L21.0371 15.333C21.5673 15.1402 21.9766 14.71 22.1426 14.1709L22.834 11.9209L23.5264 14.1709Z"
                                          fill="#FAF7F6" stroke="#514443" stroke-width="0.933333"/>
                                    <path
                                        d="M27.5012 16.1221L24.7915 17.1075C24.3987 17.2503 24.0956 17.5689 23.9728 17.9684L22.9371 21.3342C22.906 21.4352 22.7631 21.4352 22.732 21.3342L21.6964 17.9684C21.5734 17.5689 21.2704 17.2503 20.8776 17.1075L18.1679 16.1221C18.0547 16.0809 18.0547 15.9208 18.1679 15.8797L20.8776 14.8943C21.2704 14.7515 21.5734 14.4328 21.6964 14.0334L22.732 10.6675C22.7631 10.5665 22.906 10.5665 22.9371 10.6675L23.9728 14.0334C24.0956 14.4328 24.3987 14.7515 24.7915 14.8943L27.5012 15.8797C27.6144 15.9208 27.6144 16.0809 27.5012 16.1221Z"
                                        fill="#FAF7F6" stroke="#514443" stroke-width="0.933333" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M16 11.501C16.3148 11.6059 16.5618 11.8529 16.6667 12.1677C16.7201 12.3278 16.9466 12.3278 17 12.1677C17.1049 11.8529 17.3519 11.6059 17.6667 11.501C17.8268 11.4476 17.8268 11.221 17.6667 11.1677C17.3519 11.0627 17.1049 10.8157 17 10.501C16.9466 10.3408 16.7201 10.3408 16.6667 10.501C16.5618 10.8157 16.3148 11.0627 16 11.1677C15.8398 11.221 15.8398 11.4476 16 11.501Z"
                                        fill="#FAF7F6" stroke="#514443" stroke-width="0.933333" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M18.3337 20.833C18.0189 20.938 17.7719 21.185 17.667 21.4997C17.6136 21.6599 17.3871 21.6599 17.3337 21.4997C17.2287 21.185 16.9818 20.938 16.667 20.833C16.5068 20.7796 16.5068 20.5531 16.667 20.4997C16.9818 20.3948 17.2287 20.1478 17.3337 19.833C17.3871 19.6728 17.6136 19.6728 17.667 19.833C17.7719 20.1478 18.0189 20.3948 18.3337 20.4997C18.4938 20.5531 18.4938 20.7796 18.3337 20.833Z"
                                        fill="#FAF7F6" stroke="#514443" stroke-width="0.933333" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </g>
                                <path
                                    d="M34.704 23.5V13.294H41.872V14.582H36.16V17.774H41.214V19.034H36.16V23.5H34.704ZM41.9565 23.5L46.0725 13.294H47.7945L51.9105 23.5H50.3565L49.3345 20.896H44.5185L43.4825 23.5H41.9565ZM46.3945 16.164L45.0225 19.622H48.8305L47.4585 16.164C47.3652 15.94 47.2765 15.7113 47.1925 15.478C47.1085 15.2353 47.0199 14.9787 46.9265 14.708C46.8332 14.9787 46.7445 15.2353 46.6605 15.478C46.5765 15.7113 46.4879 15.94 46.3945 16.164ZM57.8147 23.64C56.8347 23.64 55.9947 23.43 55.2947 23.01C54.5947 22.59 54.0534 21.9927 53.6707 21.218C53.2974 20.434 53.1107 19.496 53.1107 18.404C53.1107 17.3027 53.2974 16.3647 53.6707 15.59C54.0534 14.806 54.5947 14.2087 55.2947 13.798C55.9947 13.378 56.8347 13.168 57.8147 13.168C58.8041 13.168 59.6487 13.378 60.3487 13.798C61.0581 14.2087 61.5994 14.806 61.9727 15.59C62.3554 16.3647 62.5467 17.298 62.5467 18.39C62.5467 19.2207 62.4347 19.9673 62.2107 20.63C61.9867 21.2833 61.6694 21.834 61.2587 22.282L62.2107 23.234L61.3567 24.116L60.2927 23.052C59.5927 23.444 58.7667 23.64 57.8147 23.64ZM57.8147 22.296C58.3561 22.296 58.8321 22.198 59.2427 22.002L57.7867 20.546L58.6407 19.692L60.2087 21.246C60.7314 20.574 60.9927 19.6267 60.9927 18.404C60.9927 17.172 60.7221 16.2153 60.1807 15.534C59.6394 14.8433 58.8507 14.498 57.8147 14.498C56.8254 14.498 56.0507 14.8293 55.4907 15.492C54.9307 16.1453 54.6507 17.1113 54.6507 18.39C54.6507 19.6127 54.9167 20.5693 55.4487 21.26C55.9901 21.9507 56.7787 22.296 57.8147 22.296Z"
                                    fill="#514443"/>
                                <g opacity="0.7">
                                    <g opacity="0.5">
                                        <g filter="url(#filter1_f_597_5009)">
                                            <path
                                                d="M-258.812 14.253C-258.812 14.253 -119.837 37.4303 29.0049 10.2676C213.741 -23.4454 334.811 6.03317 334.811 6.03317"
                                                stroke="white" stroke-width="1.48256"/>
                                        </g>
                                        <g filter="url(#filter2_f_597_5009)">
                                            <path
                                                d="M-258.812 21.4679C-258.812 21.4679 -119.837 44.6452 29.0049 17.4825C213.741 -16.2305 334.811 13.248 334.811 13.248"
                                                stroke="white" stroke-width="1.48256"/>
                                        </g>
                                        <g filter="url(#filter3_f_597_5009)">
                                            <path
                                                d="M-258.812 28.6866C-258.812 28.6866 -119.837 51.8639 29.0049 24.7012C213.741 -9.01181 334.811 20.4668 334.811 20.4668"
                                                stroke="white" stroke-width="1.48256"/>
                                        </g>
                                        <g filter="url(#filter4_f_597_5009)">
                                            <path
                                                d="M-258.812 35.9014C-258.812 35.9014 -119.837 59.0788 29.0049 31.9161C213.741 -1.79697 334.811 27.6816 334.811 27.6816"
                                                stroke="white" stroke-width="1.48256"/>
                                        </g>
                                        <g filter="url(#filter5_f_597_5009)">
                                            <path
                                                d="M-258.812 43.1163C-258.812 43.1163 -119.837 66.2936 29.0049 39.1309C213.741 5.41792 334.811 34.8964 334.811 34.8964"
                                                stroke="white" stroke-width="1.48256"/>
                                        </g>
                                        <g filter="url(#filter6_f_597_5009)">
                                            <path
                                                d="M-258.812 7.03815C-258.812 7.03815 -119.837 30.2155 29.0049 3.0528C213.741 -30.6602 334.811 -1.18165 334.811 -1.18165"
                                                stroke="white" stroke-width="1.48256"/>
                                        </g>
                                        <g filter="url(#filter7_f_597_5009)">
                                            <path
                                                d="M-258.812 -0.176686C-258.812 -0.176686 -119.837 23.0006 29.0049 -4.16204C213.741 -37.8751 334.811 -8.3965 334.811 -8.3965"
                                                stroke="white" stroke-width="1.48256"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_ddii_597_5009" x="0" y="0" width="77" height="38"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="1"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.4 0 0 0 0 0.359477 0 0 0 0 0.321569 0 0 0 0.06 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_597_5009"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="1.25"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.0941176 0 0 0 0 0.0738562 0 0 0 0 0.054902 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="effect1_dropShadow_597_5009"
                                         result="effect2_dropShadow_597_5009"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_597_5009"
                                         result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="0.75"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.0941176 0 0 0 0 0.0738562 0 0 0 0 0.054902 0 0 0 0.32 0"/>
                                <feBlend mode="normal" in2="shape" result="effect3_innerShadow_597_5009"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="-1"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.0941176 0 0 0 0 0.0738562 0 0 0 0 0.054902 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="effect3_innerShadow_597_5009"
                                         result="effect4_innerShadow_597_5009"/>
                            </filter>
                            <filter id="filter1_f_597_5009" x="-260.909" y="-8.6164" width="597.87" height="34.8021"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_5009"/>
                            </filter>
                            <filter id="filter2_f_597_5009" x="-260.909" y="-1.40155" width="597.87" height="34.8021"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_5009"/>
                            </filter>
                            <filter id="filter3_f_597_5009" x="-260.909" y="5.8172" width="597.87" height="34.8021"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_5009"/>
                            </filter>
                            <filter id="filter4_f_597_5009" x="-260.909" y="13.032" width="597.87" height="34.8021"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_5009"/>
                            </filter>
                            <filter id="filter5_f_597_5009" x="-260.909" y="20.2469" width="597.87" height="34.8021"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_5009"/>
                            </filter>
                            <filter id="filter6_f_597_5009" x="-260.909" y="-15.8312" width="597.87" height="34.8021"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_5009"/>
                            </filter>
                            <filter id="filter7_f_597_5009" x="-260.909" y="-23.0461" width="597.87" height="34.8021"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_5009"/>
                            </filter>
                            <linearGradient id="paint0_linear_597_5009" x1="38.5" y1="1.5" x2="38.5" y2="34.5"
                                            gradientUnits="userSpaceOnUse">
                                <stop offset="0.05" stop-color="#EAE0D7"/>
                                <stop offset="1" stop-color="#F6F2EF"/>
                            </linearGradient>
                            <clipPath id="clip0_597_5009">
                                <path
                                    d="M2.5 9.5C2.5 5.08172 6.08172 1.5 10.5 1.5H66.5C70.9183 1.5 74.5 5.08172 74.5 9.5V26.5C74.5 30.9183 70.9183 34.5 66.5 34.5H10.5C6.08172 34.5 2.5 30.9183 2.5 26.5V9.5Z"
                                    fill="white"/>
                            </clipPath>
                            <clipPath id="clip1_597_5009">
                                <rect width="16" height="16" fill="white" transform="translate(13.5 10)"/>
                            </clipPath>
                        </defs>
                    </svg>

                    <div
                        className={`font-grotesk font-medium text-[22px] tablet:text-[26px] laptop:text-[36px] leading-[118%] tracking-[-2%] text-center`}>Frequently
                        Asked Questions
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-y-[14px]">
                {items.map((e, index) => {
                    const isOpen = openIndex === index

                    return (
                        <div
                            key={index}
                            onClick={() => handleToggle(index)}
                            className="cursor-pointer border-b-[1px] border-dashed border-[#666] w-full max-w-[450px] gap-x-[20px] tablet:max-w-[600px] laptop:max-w-[743px] flex justify-between items-start p-[20px]"
                        >
                            <div className="select-none w-full tablet:w-[591px] flex flex-col gap-y-5">
                                <div className="font-grotesk font-medium leading-[100%] tracking-[-1%] text-[18px]">
                                    {e.question}
                                </div>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{height: 0, opacity: 0}}
                                            animate={{height: "auto", opacity: 1}}
                                            exit={{height: 0, opacity: 0}}
                                            transition={{duration: 0.3, ease: "easeOut"}}
                                            className="overflow-hidden font-grotesk text-[#666] leading-[150%] tracking-[-2%] text-[16px]"
                                        >
                                            {e.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className={`min-w-9 min-h-9`}>
                                <motion.button
                                    animate={{
                                        width: isOpen ? 36 : 32,
                                        height: isOpen ? 36 : 32,
                                    }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="cursor-pointer relative rounded-full bg-black flex items-center justify-center">
                                    <span className="absolute w-3 h-[2px] bg-white rounded-full" />
                                    <motion.span
                                        animate={{
                                            rotate: isOpen ? 90 : 0,
                                            opacity: isOpen ? 0 : 1,
                                        }}
                                        transition={{ duration: 0.18, ease: "easeOut" }}
                                        className="absolute w-3 h-[2px] bg-white rounded-full rotate-90"
                                    />
                                </motion.button>
                            </div>
                        </div>
                    )
                })}
                <div className={`w-full max-w-[450px] tablet:max-w-[600px] laptop:max-w-[740px] h-[95px] flex items-center justify-between p-5`}>
                    <div className={`font-grotesk font-medium leading-[100%] tracking-[-1%] text-[16px] tablet:text-[18px]`}>Still have questions? We're here to help!</div>
                    <div className={`h-[55px] w-[130px] p-1 rounded-full bg-[#0D2247]/5 border border-[#0D2247]/10`}>
                        <div className={`h-full w-full bg-[#27292F] rounded-full flex items-center justify-center`}>
                            <div className={`font-grotesk text-[14px] tablet:text-[15px] leading-[125%] tracking-[-2%] text-white`}>Contact Us</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Faq

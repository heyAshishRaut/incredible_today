import Image from "next/image"
import Navbar from "@/app/components/navbar"

const HeroSection = () => {
    return (
        <div className={`relative h-screen laptop:h-[960px] w-full overflow-hidden`}>

            <div className={`hero-bg absolute inset-0`}/>

            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />

            <div className={`relative w-full h-full z-10`}>
                <div className={`w-full h-11 bg-[#0D0D11] font-sans flex items-center justify-center`}>
                    <div className={`font-sans text-[11px] tablet:text-[12px] laptop:text-[14px] text-white`}>We optimize for the single statistic that matters: Amount of real-world tasks.</div>
                </div>

                {/* Navbar */}
                <div className={`relative top-[32px] w-full min-h-11 px-5 tablet:px-10 laptop:px-25 desktop:px-[120px]`}>
                    <div className={`h-full w-full max-w-[450px] tablet:max-w-[900px] laptop:max-w-[1240px] mx-auto`}>
                        <div className={`w-full h-full flex items-center justify-between`}>
                            <Image
                                src="/logoBlack.svg"
                                alt="Logo"
                                width={133}
                                height={29}
                                priority
                            />

                            <Navbar/>

                            <div
                                className="
                                relative group cursor-pointer
                                aspect-square tablet:aspect-auto
                                h-11 flex items-center justify-center
                                tablet:px-[20px] tablet:py-[12px]
                                font-sans font-medium
                                text-[15px] tablet:text-[17px]
                                leading-[19.6%] rounded-full text-white border border-[#57565F] bg-[linear-gradient(90deg,#1F1F21_0%,#3E3D4C_34%,#1F1F21_51%,#3E3D4C_72%,#1F1F21_100%)] shadow-[0_25px_45px_rgba(0,0,0,0.25)] overflow-visible">
                                <div
                                    className="
                                    pointer-events-none absolute inset-[-28px] rounded-full bg-white/8 blur-[40px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>

                                <div className="relative z-10 hidden tablet:block">
                                    Try AI Assistant
                                </div>

                                <div className="relative z-10 tablet:hidden flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                                    </svg>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className={`relative top-[110px] tablet:top-[144px] px-5 tablet:px-10 laptop:px-25 desktop:px-[120px]`}>
                    <div className={`w-full max-w-[450px] tablet:max-w-[550px] laptop:max-w-[690px] flex flex-col items-center gap-y-[40px] laptop:gap-y-[70px] mx-auto`}>
                        <div className={`flex flex-col items-center gap-y-[24px] tablet:gap-y-[34px]`}>
                            <div className={`w-full flex flex-col gap-y-[14px]`}>
                                <div className={`font-grotesk font-medium text-[36px] tablet:text-[46px] laptop:text-[56px] leading-[110%] tracking-[-2%] text-center`}>Agentic AI models purpose built for work.</div>
                                <div className={`w-full tablet:w-[506px] mx-auto font-grotesk font-medium text-[15px] tablet:text-[17px] text-center text-[#464646]/86 leading-[150%] tracking-[-2%]`}>We optimize for the single statistic that matters: Amount of real-world tasks a model can solve</div>
                            </div>

                            <div className={`flex items-center gap-x-[12px]`}>
                                <div
                                    className=" relative group cursor-pointer h-11 flex items-center justify-center px-[20px] py-[12px] font-sans font-medium text-[15px] tablet:text-[17px] leading-[19.6%] rounded-full text-white border border-[#57565F] bg-[linear-gradient(90deg,#1F1F21_0%,#3E3D4C_34%,#1F1F21_51%,#3E3D4C_72%,#1F1F21_100%)] shadow-[0_25px_45px_rgba(0,0,0,0.25)] overflow-visible">
                                    <div
                                        className="
                                    pointer-events-none absolute inset-[-28px] rounded-full bg-white/8 blur-[40px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>

                                    <div className="relative z-10">
                                        Try AI Assistant
                                    </div>

                                </div>
                                <div className={`cursor-pointer h-11 flex items-center px-[20px] py-[12px] font-sans font-medium text-[15px] tablet:text-[17px] leading-[19.6%] rounded-full text-[#0D0D0D] bg-[#EEE]`}>
                                    Try Incredible Agents
                                </div>
                            </div>
                        </div>

                        <div className={`h-[148px] w-full tablet:w-[562px] p-[10px] rounded-[33px] bg-white/60% border border-white`}>
                            <div className={`p-3 h-full w-full border border-orange-400 bg-white rounded-[23px] flex flex-col gap-y-6`}>
                                <div className={`p-2 h-1/2 w-full font-sans flex items-center text-[#464646]/50`}>Ask, research, or do work</div>
                                <div className={`w-full h-1/2 flex items-center justify-between`}>
                                    <div className={`h-full flex gap-x-2`}>
                                        <div className={`h-full aspect-square border border-[#464646]/30 rounded-xl flex items-center justify-center`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M460-460H240v-40h220v-220h40v220h220v40H500v220h-40v-220Z"/></svg>
                                        </div>
                                        <div className={`h-full border border-[#464646]/30 rounded-xl flex items-center justify-center gap-x-3 py-1 px-3`}>
                                            <svg role="img" viewBox="0 0 24 24" className={`h-4 w-4`} xmlns="http://www.w3.org/2000/svg"><title>Notion</title><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>
                                            <svg role="img" viewBox="0 0 24 24" className={`h-4 w-4`} xmlns="http://www.w3.org/2000/svg"><title>Notion</title><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>
                                            <svg role="img" viewBox="0 0 24 24" className={`h-4 w-4`} xmlns="http://www.w3.org/2000/svg"><title>Notion</title><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>
                                        </div>
                                    </div>

                                    <div className={`h-full flex gap-x-4`}>
                                        <div className={`h-full flex items-center justify-center gap-x-2`}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.8811 5.83333H9.33335C9.05721 5.83333 8.83335 5.60948 8.83335 5.33333V2.1057C8.83335 1.61505 8.2003 1.41792 7.92175 1.82183L2.70728 9.3828C2.47853 9.71449 2.71597 10.1667 3.11889 10.1667H6.66669C6.94283 10.1667 7.16669 10.3905 7.16669 10.6667V13.8943C7.16669 14.385 7.79974 14.5821 8.07829 14.1782L13.2928 6.6172C13.5215 6.28551 13.2841 5.83333 12.8811 5.83333Z" stroke="#E36323" stroke-width="1.5" stroke-linejoin="round"/>
                                            </svg>
                                            <div className={`text-[14px] font-sans font-medium`}>Automatic</div>
                                        </div>
                                        <div className={`h-full bg-black aspect-square rounded-xl flex items-center justify-center`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M450-180v-485.08L222.15-437.23 180-480l300-300 300 300-42.15 42.77L510-665.08V-180h-60Z"/></svg>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection

// <div className={`w-full h-full p-5 tablet:p-10 laptop:p-25 desktop:p-[120px]`}>
// <div className={`w-full h-full`}>
//
// </div>
// </div>
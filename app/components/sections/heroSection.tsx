import Image from "next/image"
import Navbar from "@/app/components/navbar"
import Hamburger from "@/app/components/hamburger"

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
                                hidden
                                relative group cursor-pointer
                                aspect-square tablet:aspect-auto
                                h-11 laptop:flex items-center justify-center
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
                            </div>

                            <Hamburger/>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className={`relative top-[110px] tablet:top-[144px] px-5 tablet:px-10 laptop:px-25 desktop:px-[120px]`}>
                    <div className={`w-full max-w-[450px] tablet:max-w-[550px] laptop:max-w-[690px] flex flex-col items-center gap-y-[40px] laptop:gap-y-[70px] mx-auto`}>
                        <div className={`flex flex-col items-center gap-y-[24px] tablet:gap-y-[34px]`}>
                            <div className={`w-full flex flex-col gap-y-[14px]`}>
                                <div className={`font-grotesk font-medium text-[36px] tablet:text-[46px] laptop:text-[56px] desktop:text-[66px] leading-[110%] tracking-[-2%] text-center`}>Agentic AI models purpose built for work.</div>
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
                                        <div className={`h-full aspect-square border border-[#E2E2E2] rounded-[12px] flex items-center justify-center`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M460-460H240v-40h220v-220h40v220h220v40H500v220h-40v-220Z"/></svg>
                                        </div>

                                        <div className={`h-full border border-[#E2E2E2] rounded-[12px] flex items-center justify-center gap-x-3 py-1 px-[10px]`}>
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_597_2868)">
                                                    <path d="M3.53706 10.474C3.53706 11.4252 2.76132 12.2021 1.81 12.2021C0.858684 12.2021 0.0820312 11.4252 0.0820312 10.474C0.0820312 9.52282 0.858943 8.74591 1.81013 8.74591H3.53719L3.53706 10.474ZM4.40767 10.474C4.40767 9.52282 5.18458 8.74591 6.13577 8.74591C7.08695 8.74591 7.86387 9.52269 7.86387 10.474V14.7998C7.86387 15.751 7.08708 16.5279 6.13577 16.5279C5.18458 16.5279 4.40767 15.751 4.40767 14.7998V10.474Z" fill="#DE1C59"/>
                                                    <path d="M6.13577 3.53706C5.18458 3.53706 4.40767 2.76132 4.40767 1.81C4.40767 0.858684 5.18458 0.0820312 6.13577 0.0820312C7.08695 0.0820312 7.86387 0.858943 7.86387 1.81013V3.53719L6.13577 3.53706ZM6.13577 4.40767C7.08695 4.40767 7.86387 5.18458 7.86387 6.13577C7.86387 7.08695 7.08708 7.86387 6.13577 7.86387H1.81C0.858813 7.86387 0.0820312 7.08708 0.0820312 6.13577C0.0820312 5.18458 0.858943 4.40767 1.81013 4.40767H6.13577Z" fill="#35C5F0"/>
                                                    <path d="M13.0739 6.13577C13.0739 5.18458 13.8496 4.40767 14.8009 4.40767C15.7523 4.40767 16.529 5.18458 16.529 6.13577C16.529 7.08695 15.7521 7.86387 14.8009 7.86387H13.0739V6.13577ZM12.2033 6.13577C12.2033 7.08695 11.4264 7.86387 10.4752 7.86387C9.52398 7.86387 8.74707 7.08708 8.74707 6.13577V1.81C8.74707 0.858813 9.52385 0.0820312 10.4752 0.0820312C11.4264 0.0820312 12.2033 0.858943 12.2033 1.81013V6.13577Z" fill="#2EB57D"/>
                                                    <path d="M10.4752 13.0727C11.4264 13.0727 12.2033 13.8485 12.2033 14.7998C12.2033 15.7511 11.4264 16.5279 10.4752 16.5279C9.52398 16.5279 8.74707 15.751 8.74707 14.7998V13.0727H10.4752ZM10.4752 12.2021C9.52398 12.2021 8.74707 11.4252 8.74707 10.474C8.74707 9.52282 9.52385 8.74591 10.4752 8.74591H14.8009C15.7521 8.74591 16.529 9.52269 16.529 10.474C16.529 11.4252 15.7521 12.2021 14.8009 12.2021H10.4752Z" fill="#EBB02E"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_597_2868">
                                                        <rect width="16.6101" height="16.6101" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_597_2874)">
                                                    <path d="M7.83347 8.68224H5.47484V7.36105H7.83486V8.68293L7.83347 8.68224ZM10.1935 0V4.15253H14.346L10.1935 0ZM11.1368 7.36105H8.77679V8.68293H11.1368V7.36105ZM11.1368 9.62625H8.77679V10.9481H11.1368V9.62625ZM14.3453 4.49857V15.4779C14.3453 16.1035 13.8387 16.6101 13.2131 16.6101H3.39788C3.24919 16.6101 3.10196 16.5808 2.96459 16.5239C2.82721 16.467 2.70239 16.3836 2.59726 16.2785C2.38492 16.0661 2.26562 15.7781 2.26562 15.4779V1.13226C2.26563 0.506608 2.77223 0 3.39788 0H9.84675V4.49857H14.3453ZM12.0801 6.41773H4.53014V11.8915H12.0808V6.41704L12.0801 6.41773ZM7.83347 9.62625H5.47484V10.9481H7.83486V9.62625H7.83347Z" fill="#20A464"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_597_2874">
                                                        <rect width="16.6101" height="16.6101" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                            <svg role="img" viewBox="0 0 24 24" className={`h-4 w-4`} xmlns="http://www.w3.org/2000/svg"><title>Notion</title><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>
                                        </div>
                                    </div>

                                    <div className={`h-full flex gap-x-4`}>
                                        <div className={`h-full flex items-center justify-center gap-x-2`}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.8811 5.83333H9.33335C9.05721 5.83333 8.83335 5.60948 8.83335 5.33333V2.1057C8.83335 1.61505 8.2003 1.41792 7.92175 1.82183L2.70728 9.3828C2.47853 9.71449 2.71597 10.1667 3.11889 10.1667H6.66669C6.94283 10.1667 7.16669 10.3905 7.16669 10.6667V13.8943C7.16669 14.385 7.79974 14.5821 8.07829 14.1782L13.2928 6.6172C13.5215 6.28551 13.2841 5.83333 12.8811 5.83333Z" stroke="#E36323" strokeWidth="1.5" strokeLinejoin="round"/>
                                            </svg>
                                            <div className={`text-[14px] font-sans font-medium`}>Automatic</div>
                                        </div>
                                        <div className={`h-full bg-black aspect-square rounded-xl flex items-center justify-center`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#FFFFFF"><path d="M450-180v-485.08L222.15-437.23 180-480l300-300 300 300-42.15 42.77L510-665.08V-180h-60Z"/></svg>
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
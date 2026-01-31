import exploreAI from "@/public/exploreAI.png"

const ExploreAI = () => {
    return (
        <div className={`p-[20px] tablet:p-[40px] laptop:p-[100px] desktop:p-[120px] flex items-center`}>
            <div style={{ backgroundImage: `url(${exploreAI.src})` }} className={`flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-4xl w-full tablet:w-[900px] laptop:w-[1070px] h-[377px] mx-auto`}>
                <div className={`h-[180px] w-[350px] tablet:w-[550px] laptop:w-[630px] flex flex-col items-center gap-y-[34px]`}>
                    <div className={`flex flex-col items-center gap-y-3`}>
                        <div className={`font-grotesk font-medium text-center text-[26px] laptop:text-[36px] text-white leading-[118%] tracking-[-2%]`}>Start using AI that actually work</div>
                        <div className={`text-center font-grotesk text-[15px] tablet:text-[16px] text-white leading-[150%] tracking-[-2%]`}>
                            Whether you want to get your work done faster, or build the next agentic product, Incredible is the platform that makes it possible.
                        </div>
                    </div>
                    <div className={`flex items-center gap-x-3`}>
                        <div className={`cursor-pointer w-[145px] h-[43px] flex items-center justify-center bg-white hover:bg-white/85 transition-all ease-in rounded-full text-black font-grotesk text-[15px]`}>Try AI Assistant</div>
                        <div className={`cursor-pointer w-[134px] h-[43px] glass-border flex items-center justify-center bg-white/17 hover:bg-white/23 transition-all ease-in rounded-full text-white font-grotesk text-[15px] border border-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1),inset_0_0_20px_rgba(255,255,255,0.1)]`}>Explore the AI</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreAI
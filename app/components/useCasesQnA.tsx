"use client"
import {useState} from "react"

interface Faqs {
    question: string
    answer: string
    tags: string[]
}

const faqs: Faqs[] = [
    {
        question: "Marketer",
        answer: "Incredible’s models can pull live data from HubSpot, spreadsheets, and hundreds of other integrations, and create graphs.",
        tags: ["Graphs", "Spreadsheets", "Reports"]
    },
    {
        question: "Sales",
        answer: "Incredible’s models can pull live data from HubSpot, spreadsheets, and hundreds of other integrations, and create graphs.",
        tags: ["Graphs", "Spreadsheets", "Reports"]
    },
    {
        question: "OPS/Admin",
        answer: "Incredible’s models can pull live data from HubSpot, spreadsheets, and hundreds of other integrations, and create graphs.",
        tags: ["Graphs", "Spreadsheets", "Reports"]
    },
    {
        question: "HR & CS",
        answer: "Incredible’s models can pull live data from HubSpot, spreadsheets, and hundreds of other integrations, and create graphs.",
        tags: ["Graphs", "Spreadsheets", "Reports"]
    },
]

const UseCasesQnA = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <div className="w-full h-full flex flex-col justify-center gap-y-5">
            {faqs.map((item, index) => {
                const isOpen = openIndex === index
                return (
                    <div key={index} className={`border-b border-gray-300/60 ${!isOpen ? "pb-3" : "pb-0"}`}>
                        <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full flex justify-between items-center">
                            <span className="font-grotesk text-[24px] leading-[118%] tracking-[-2%]">{item.question}</span>
                            <span className={`transition-transform ${isOpen ? "rotate-180 bg-black" : "bg-gray-300/50"} h-8 w-8 rounded-full flex items-center justify-center`}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={isOpen ? "#FFF" : "#000"}><path d="M450-180v-485.08L222.15-437.23 180-480l300-300 300 300-42.15 42.77L510-665.08V-180h-60Z"/></svg>
                            </span>
                        </button>

                        {isOpen && (
                            <div className="mt-3 text-black/70 font-sans text-[16px]">
                                <div>
                                    {item.answer}
                                </div>
                                <div className={`py-[25px] flex items-center gap-x-2`}>
                                    {
                                        item.tags.map((e, i) => (
                                            <div key={i} className={`p-[10px] border border-gray-300 rounded-[12px]`}>
                                                {e}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default UseCasesQnA
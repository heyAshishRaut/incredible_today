import HeroSection from "@/app/components/sections/heroSection"
import TrustedByTopTalent from "@/app/components/sections/trustedByTopTalent"
import UseCases from "@/app/components/sections/useCases"
import Integrations from "@/app/components/sections/integrations"
import Build from "@/app/components/sections/build"
import Integrations2 from "@/app/components/sections/integrations2"

export default function Home() {
    return (
        <div className={`min-h-screen w-full`}>
            <HeroSection/>
            <TrustedByTopTalent/>
            <UseCases/>
            <Integrations/>
            <Build/>
            <Integrations2/>
        </div>
    )
}

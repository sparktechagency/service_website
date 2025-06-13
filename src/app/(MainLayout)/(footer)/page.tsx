import HeroSection from "@/components/home/hero/HeroSection"
import PopularCategories from "@/components/home/PopularCategory/PopularCategories"
import RecentBlogList from "@/components/home/RecentBlogList/RecentBlogList"
import RegisterSection from "@/components/home/register/RegisterSection"
//import StatsSection from "@/components/home/stats/StatsSection"
import Who from "@/components/home/about/About"

const HomePage = () => {
  return (
    <>
       <HeroSection/>
       {/* <StatsSection/> */}
       <RegisterSection/>
       <PopularCategories/>
        <RecentBlogList/>
       <Who/>
    </>
  )
}

export default HomePage
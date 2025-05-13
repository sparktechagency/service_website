import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react"

type TProps = {
    children: React.ReactNode;
}
const layout = ({children}: TProps) => {
  return (
    <>
     <Navbar/>
        {/* <div className="h-screen container mx-auto max-w-ful"> */}
          {children}
        {/* </div> */}
       {/* <Footer/> */}
     </>
  )
}

export default layout
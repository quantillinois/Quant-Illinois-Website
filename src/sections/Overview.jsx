import InfoSection from "../components/InfoSection"
import scd from "../assets/scd.jpeg"
import scdWide from "../assets/scdWide.jpeg"
import infonight from "../assets/infosp25.jpeg"

const infoSections = [
  {
    title: "Learn",
    description: "As a member of Quant, you'll start by reinforcing your foundation in your area of expertise. This requires a combination of self-research and discussions that are guided by more experienced members of Quant and/or industry professionals."
  },
  {
    title: "Build & Test",
    description: "Following a project plan and proposal, you will work in teams to build and execute your project. Throughout the duration of the project, you're encouraged to ask questions and create documentation to help record your progress."
  },
  {
    title: "Connect",
    description: "Quant is a community of like-minded individuals who are passionate about quantitative finance and trading. We host weekly meetings to discuss current events in the industry, and we also host social events to help you get to know your fellow members."
  }
]

export default function Overview() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#48d1cc] to-blue-600 grid grid-cols-5 w-full py-20">
      <div className="text-center col-span-5 lg:col-span-2">
        <h1 className="text-6xl 2xl:text-7xl text-white font-semibold">What We Do</h1>
        <p className="text-lg 2xl:text-2xl text-white mt-6 text-left leading-relaxed w-2/3 lg:w-1/2 mx-auto">At Quant, our mission is to help students break into Quantitative Finance and High Frequency Trading. We partner with a multitude of leading firms in the field to help provide you the network, resources, and funds to conduct research and implement industry-relevant strategies and technologies.</p>
        <img src={infonight} alt="SCD" className="absolute  w-[28%]  object-cover mb-20 ml-32 mt-5 invisible lg:visible"/>
      </div>
      <div className="mt-10 lg:mt-0 text-center col-span-5 lg:col-span-3 flex flex-col justify-between">
        <hr></hr>
        {infoSections.map((infoSection) => (
          <>
            <InfoSection title={infoSection.title} description={infoSection.description} />
            <hr></hr>
          </>
        ))}

      </div>
    </div>
  )
}
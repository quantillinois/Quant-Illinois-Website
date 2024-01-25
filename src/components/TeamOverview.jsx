import {BsArrowReturnRight, BsArrowRight, BsXLg} from "react-icons/bs";

export default function TeamOverview({data}) {
  return (
    <div className="w-full grid grid-cols-4 mt-10">
      <h1 className={"text-6xl lg:text-9xl text-center lg:text-left col-span-4 lg:col-span-3 row-span-1 "+data.textColor}>{data.title}</h1>
      <h1 className="text-9xl text-left hidden lg:flex row-span-1">Team</h1>

      <div className="col-span-4 lg:col-span-3 bg-[#252525] rounded-lg p-5 lg:p-10 lg:mr-10 mt-10">
        <p className="text-white text-xl lg:text-3xl">{data.summary}</p>
        <p className="mt-5 text-white text-xl lg:text-3xl underline">{data.subText}</p>
        <ul className="ms-14 py-5 space-y-5">
          {data.bullets.map((bullet) => (
            <div className="flex">
            <BsArrowReturnRight className="text-white text-xl lg:text-3xl mr-3"/>
            <li className="text-white text-xl lg:text-3xl">{bullet}</li>
            </div>
          ))}
        </ul>
      </div>

      <div className="col-span-4 lg:col-span-1 bg-[#D4D4D4] rounded-lg p-5 lg:p-10 mt-10 flex flex-col">
        {data.teamLeader.map((leader) => (
        <p className={"text-xl lg:text-3xl " + data.textColor}>{leader}</p>
        ))}
        {data.teamMembers.map((member) => (
          <p className="text-xl lg:text-3xl">{member}</p>
        ))}
        <div className="grow"></div>
        <div className="flex justify-between mt-5">
          { data.status ?
          <p className="text-2xl my-auto">Applications Open</p>
          :
          <p className="text-2xl my-auto">Applications Closed</p>
          }
          { data.status ?
          <a className={"rounded-lg p-3 cursor-pointer " + data.bgColor} href="https://docs.google.com/forms/d/1xsn1GN8pieTNQodYZEF0OpVanJMBKRfq0a26iOOyaDk/edit">
          <BsArrowRight className="text-5xl hover:-rotate-45 duration-200"/>
          </a>
          :
           <div className={"rounded-lg p-3 " + data.bgColor}>
            <BsXLg className="text-5xl"/>
          </div>
          }
        </div>
      </div>
    </div>
  )
}
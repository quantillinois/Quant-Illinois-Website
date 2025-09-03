import { Card, Button } from "flowbite-react";
import { eventData } from "../assets/eventData";
import { FaLocationDot } from "react-icons/fa6";


function EventCard({datetime, title, location, description, rsvpLink, msg}) {
  return (
    <Card className="rounded-2xl my-4 mx-5 transform hover:translate-y-[-0.5rem] duration-200">
        <p className="text-sm text-gray-600 font-bold">{datetime}</p>
        <p className="text-2xl font-semibold text-secondary">{title}</p>
        <p className="text-md">{description}</p>
        
        <div className="flex justify-between flex-col md:flex-row">
          <span className="text-md font-thin my-auto flex">
          <FaLocationDot className="text-lg mb-3 sm:mb-0 mt-1 mr-1 text-primary"/>
          <p>{location}</p>
          </span>
          {rsvpLink ? <Button href={rsvpLink} >{msg}</Button> : <div className="h-10"></div>}
        </div>
    </Card>
  );
}


export default function Events() {
  return  // Events are disabled when nothing to show. 
  return (
    <div className="h-auto px-5 lg:px-20 py-10 mx-auto bg-gradient-to-r from-[#48d1cc] to-blue-600 mt-10">
      <h1 className="text-center text-7xl mb-10 font-medium text-white">Events</h1>
      <div className="grid lg:grid-cols-3">
        {eventData.map((e) => (
          <EventCard {...e} />
        ))}
      </div>
    </div>
  );
}
export default function InfoSection({title, description}) {
  return (
    <div className="text-left px-20 my-10 lg:my-0">
      <h1 className="text-3xl 2xl:text-5xl text-white mb-3">{title}</h1>
      <p className="text-xl text-white font-extralight">{description}</p>
    </div>
  )
}
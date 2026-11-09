export default function LeadershipCard({ img, name, position, link }) {
  return (
    <article className="person">
      <a href={link} aria-label={`${name} on LinkedIn`}>
        <img src={img} alt="" loading="lazy" width="220" height="220" />
        <h3>{name} <span aria-hidden="true">↗</span></h3>
      </a>
      <p>{position}</p>
    </article>
  )
}

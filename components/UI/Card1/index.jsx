export default function Card1 (props) {
  return (
    <>
      <h2 className="text-uppercase"><strong>Linha</strong></h2>
      <h2 className="text-uppercase"><strong>{props.title}</strong></h2>
      <p>{props.description}</p>
    </>
  )
}

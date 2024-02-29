import "./Card.css";
function Card({title="titulo por defecto", description="descripción por defecto"}) {
  return (
    <div className="Card">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Card;
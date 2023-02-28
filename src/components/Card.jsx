

function Card(props){
    const {img, title, desc } = props;


    return(
    <div className="card">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
    );
}

export default Card;
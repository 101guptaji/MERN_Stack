
const SingleCard = ({heading,features,price}) => {
  return (
    <div className="card">
        <h3>{heading}</h3>
        <ul className="lists">
            {
                features.map((item, index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })
            }
        </ul>
        <button className="btn">Rs. {price} per month</button>
    </div>
  )
}

export default SingleCard
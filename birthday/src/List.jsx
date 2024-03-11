export default function List({people}){
    const {id, name, age, image} = people;
    return(
        <>
        <img src={image} alt={name} />
        <div className="contact">
            <h1>{name}</h1>
            <p>{age}</p>
        </div>
        </>
    )
}
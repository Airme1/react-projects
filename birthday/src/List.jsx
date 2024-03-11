export default function List({ people }) {
    people.map((person) => {
        const {id, name, age, image } = person;
    })
    
    return (
        <>
            <img src={image} alt={name} />
            <div className="contact">
                <h1>{name}</h1>
                <p>{age}</p>
            </div>
        </>
    )
}
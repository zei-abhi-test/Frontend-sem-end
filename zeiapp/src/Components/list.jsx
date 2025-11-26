export default function List() {
    const animals=["Capybara" , "Meaw" , "Larry" , "Doggo" , "Birb"] ;

    return (
        <div>
            <h2>Animal list</h2>

            {animals.map((animals,index ) => (
                <p key={index}>{animals}</p>
            ))}
        </div>
    )
}
function Greetings(props){

    let greeting = "";
    switch (props.lang){
        case "de":
            greeting = "Hallo";
            break;
        case "en":
            greeting = "Hello";
            break;
        case "es":
            greeting = "Hola";
            break;
        case "fr":
            greeting = "Bonjour";
            break;
        default:
    }

    return (
        <div className="card">
            <p>{`${greeting} ${props.children}`}</p>
        </div>
    );
}

export default Greetings;
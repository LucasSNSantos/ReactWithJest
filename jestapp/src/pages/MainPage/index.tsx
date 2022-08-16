


interface MainPageProps{
    title:string,
    subtitle:string,
    text:string
}

function MainPage(props:MainPageProps)
{
    return (
        <div className="main">
            <h1>{props.title}</h1>

            <h4>{props.subtitle}</h4>

            <div className="text-body"> 
                <div>
                    {props.text}
                </div>
            </div>
        </div>
    );
}




export default MainPage;
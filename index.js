let root = ReactDOM.createRoot(document.querySelector("#container"))

function Header() {
    return (
        <div>
            <img className = "img" src="jasper6.jpg"/>
            <div className="header-div">
                <h1 className="header">Jasper Jassepi</h1>
                <h2 className="title">Frontend Developer</h2>
                <p>Jasperino@gmail.com</p>
            </div>
            <div className="button-div">
            <button><a href="#">Email</a></button>
            <button className="button-two"><a href="#">LinkedIn</a></button>
            </div>
        </div>
    )
}

function Main() {
    return (
    <div>
        <div className="main-div">
            <div>
                <h2 className="header">About</h2>
                <p>I grew up in a small town before coming to Minneapolis. I really enjoy the people so far. I have been working in web development for a little over 5 years. I plan to start learning backend soon. I look forward to potentially working with you!</p>
            </div>
            <div className="interests">
                <h2 className="header">Interests</h2>
                <p>I play hockey often. Nothing beats getting on the rink with the guys. On my free time you can find me brushing up my coding skills and learning new languages. I try to challenge myself every day.</p>
            </div>
        </div>
        <div className="foot"></div>
    </div>
    )
}


root.render(
<div className="god">
    <Header />
    <Main />
</div>
);
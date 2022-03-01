import "./intro.css"
import me from "../../img/myself.png"

const intro = () => {

    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <div className="intro-defination">
                        <h2 style={{margin:"0"}}>My name is </h2>
                    </div>
                    <div className="intro-name">
                        <h1 style={{margin:"0"}}>Ritesh Dash</h1>
                    </div>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Web Developer</div>
                            <div className="intro-title-item">Devops Proffesional</div>
                            <div className="intro-title-item">Product Enthusiast</div>
                            <div className="intro-title-item">Bibliophile</div>
                        </div>
                    </div>
                    <p className="intro-description">
                        hi, i am such a amazing persona. I love solving problems,
                        I love reading books and exploring new genres as well.
                    </p>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-background">

                </div>
                <img src={me} alt="" className="intro-image"/>
            </div>
        </div>
    )
}

export default intro
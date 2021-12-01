import {useState, useEffect} from "react"

const Curriculum = () => {
    return (
        // uses our flex align justify center className
        <div className="App800px">
            {/* i set --break-height to 100px so it has some extra margin */}
            <div className="break" style={{ "--break-height": "100px" }}></div>
            <p className="title">Welcome to Paswise's curriculum.</p>
            <p className="p">Paswise is a proven path to your first software developer job.</p>
            <p className="p">More than 40,000 people have gotten developer jobs after completing this – including at big companies like Google and Microsoft.</p>
            <p className="p">If you are new to programming, we recommend you start at the beginning and earn these certifications in order.</p>
            <p className="p">To earn each certification, build its 5 required projects and get all their tests to pass.</p>
            <p className="p">You can add these certifications to your résumé or LinkedIn. But more important than the certifications is the practice you get along the way.</p>
            <p className="p">If you feel overwhelmed, that is normal. Programming is hard.</p>
            <p className="p">Practice is the key. Practice, practice, practice.</p>
            <p className="p">And this curriculum will give you thousands of hours of hands-on programming practice.</p>
            <p className="p">And if you want to learn more math and computer science theory, we also have thousands of hours of video courses on <span style={{borderBottom: "2px solid black", cursor: "pointer"}} onClick={() => window.open("https://www.youtube.com/channel/UCR1_HH-Xo7_GtpUj0mrrvoQ")}>Paswise's YouTube channel</span>.</p>
            <p className="p">If you want to get a developer job or freelance clients, programming skills will be just part of the puzzle. You also need to build your personal network and your reputation as a developer.</p>
            <p className="p">You can do this on Twitter and GitHub, and also on the <span style={{borderBottom: "2px solid black", cursor: "pointer"}} onClick={() => window.location.replace("/forum")}>Paswise forum</span>.</p>
            <p className="p">Happy coding!</p>
            <div className="centerizer">
                <div className="curriculumbutton" style={{ margin: "30px" }} onClick={() => window.location.replace("/login")}><p className="title" style={{ fontSize: "18px", margin: 0}}>Sign in to save your progress</p></div>
            </div>
        </div>
    )
}

export default Curriculum
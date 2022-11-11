import Card from "../components/shared/card"

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>this is a react app to leave feedback for a product or service</p>
                <p>Version 1.0.0</p>

                <p><a href="/">Back to home</a></p>
            </div>
        </Card>
    
    )
}


export default AboutPage
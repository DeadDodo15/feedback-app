import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"

function App(){
    const [Feedback, setFeedback] = useState(FeedbackData)

    return <>
    <Header text="Feedback UI" />
    <div className="container">
    <FeedbackList feedback={Feedback}/>
    </div>
    </>
}

export default App
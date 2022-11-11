import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App(){
    const [Feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(Feedback.filter((item) => item.id !== id))
        }
    }

    return <>
    <Header text="Feedback UI" />
    <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={Feedback}/>
    <FeedbackList feedback={Feedback} handleDelete={deleteFeedback}/>

    </div>
    </>
}

export default App
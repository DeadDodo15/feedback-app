import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { v4 as uuidv4 } from 'uuid'


function App(){
    const [Feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(Feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...Feedback ])
    }

    return <>
    <Header text="Feedback UI" />
    <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={Feedback}/>
    <FeedbackList feedback={Feedback} handleDelete={deleteFeedback}/>

    </div>
    </>
}

export default App
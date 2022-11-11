import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { v4 as uuidv4 } from 'uuid'
import AboutPage from "./pages/AboutPage"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


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

return <Router>
    <Header text="Feedback UI" />
    <div className="container">
      <Routes>
            <Route exact path="/" element={
                <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={Feedback}/>
                <FeedbackList feedback={Feedback} handleDelete={deleteFeedback}/>
                </>
            }>
                
            </Route>

        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </div>
    </Router>
}


export default App
import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext from "../Context/FeedbackContext"
import Spinner from "./shared/Spinner"

function FeedbackList(){

    const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)){
        return <p>No feedback yet</p>
    }else {

        return isLoading ? <Spinner /> : ( <div className="feedback-list">
        <AnimatePresence>
        {feedback.map((item)=>(
            <motion.div
                 key={item.id}
                 initial={{opacity:0}}
                 animate={{opacity:1}}
                 exit={{opacity:0}} > 
            <FeedbackItem key={item.id} item={item}/>
            </motion.div>
        ))}
        </AnimatePresence>
    </div>  )
        
    }

}

export default FeedbackList
import Card from "./shared/card"
import { useState } from 'react'

function FeedbackForm() {
    const [text, setText] = useState('')
    const handletextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                {/* Rating select component */}
                <div className="input-group">
                    <input onChange={handletextChange} type="text" placeholder="write a review" value={text}/>
                    <button type="submit">Send</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
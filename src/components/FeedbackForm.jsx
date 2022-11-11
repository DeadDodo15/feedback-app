import Card from "./shared/card"
import { useState } from 'react'
import Button from "./shared/Button"

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
                    <Button type="submit" version='primary' isDisabled={false} >Send</Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
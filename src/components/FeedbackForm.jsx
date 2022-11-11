import Card from "./shared/card"
import { useState } from 'react'
import Button from "./shared/Button"

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handletextChange = (e) => {
        if(text===''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text!==''&&text.trim().length <=10){
            setMessage('Text must be atleast 10 character')
            setBtnDisabled(true)
        }else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                {/* Rating select component */}
                <div className="input-group">
                    <input onChange={handletextChange} type="text" placeholder="write a review" value={text}/>
                    <Button type="submit" version='primary' isDisabled={btnDisabled} >Send</Button>
                </div>


                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
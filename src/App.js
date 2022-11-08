import React from "react"

function App(){
    const title = 'blog post'
    const body = 'blog post body'
    const comments = [
        { id:1, text: "comment one" },
        { id:2, text: "comment two" },
        { id:3, text: "comment three" },
        { id:4, text: "comment four" },
        { id:5, text: "comment five" },
    ]
    
    let displayComments = true

    let commentBlock = (
    <div className="comments">
    <h3>Comments ({comments.length})</h3>
    <ul>
        {comments.map((comment, index) => (
            <li key={comment.id}>{comment.text}</li>
        )  )}
    </ul>
    </div>
    )

    return <>
    <h1>{title}</h1>
    <p>{body}</p>

    {displayComments ? commentBlock : 'No comments available' }
   
    </>
}

export default App
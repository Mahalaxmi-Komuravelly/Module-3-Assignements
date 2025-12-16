function MessageCard({title,message}){


    return (
        <>
            
            <div className="card">
                <h3>Title: {title}</h3>
                <p>Message: {message}</p>
            </div>

        </>
    )
}

export default MessageCard;
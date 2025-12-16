import MessageCard from "./MessageCard";
function App(){
    return (
    <>
        <h1>Reusable Component with Props</h1>
        <MessageCard title="HTML" message="HTML is used to create web pages"/>
        <MessageCard title="CSS" message="CSS is used to style the web pages"/>
        <MessageCard title="JavaScript" message="JS is used to perform actions on webpage"/>
        <MessageCard title="React" message="React is a Library in JS"/>
    </>
    
)

}

export default App;
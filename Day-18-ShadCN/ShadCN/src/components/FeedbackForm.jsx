import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const FeedbackForm = () => {
  const [feedbacklist,setfeedbackList] = useState([]);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [feedback,setFeedback] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim().length === 0 || email.trim().length === 0 || feedback.trim().length === 0) 
      {alert("Invalid Details");
      return;}
    const item = {name,email,feedback,id:Date.now()};
    setfeedbackList((prevList)=>[...prevList,item]);
    setEmail("");
    setName("");
    setFeedback("");
  }
  return (
    <div>
      <h2 className='text-center font-bold m-3 p-3 text-2xl'>Feedback Form</h2>
    <div className='flex justify-center m-4'>
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle className='text-center'>Feedback Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-6'>
              <Input placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
              <Input placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <Textarea placeholder="Enter Feedback here..." value={feedback} onChange={(e)=>setFeedback(e.target.value)}/>
              <Button  type='submit' className='m-auto'>Submit</Button>
            </div>
          </form>
        </CardContent>
        
      </Card>
      
    </div>
    <div  className='grid grid-cols-3'>
          {feedbacklist.map((item)=>(
            <div key={item.id} className='border p-4 m-5 rounded-sm'>
                <h3><b>Name: </b> {item.name}</h3>
                <p><b>Email: </b> {item.email}</p>
                <p><b>Feedback: </b> {item.feedback}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default FeedbackForm

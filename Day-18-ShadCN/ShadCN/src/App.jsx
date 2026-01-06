import ImageSlideshow from "./components/ImageSlideshow";
import TodoApp from "./components/TodoApp";
import FeedbackForm from "./components/FeedbackForm";
function App(){

  return(
    <div>
      <FeedbackForm />
      <hr />
      <ImageSlideshow />
      <hr />
      <TodoApp />
    </div>
  )
}

export default App;
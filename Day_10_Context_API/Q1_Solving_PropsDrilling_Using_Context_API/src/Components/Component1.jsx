import { AppContext } from "../Context/AppContext";
import Component2 from "./Component2";

function Component1(){

   const data = {
      a: "Apple",
      b: "ball",
      c: 123,
      d: "Mahalaxmi",
      e: true,
      f: "father"
   }
   return (
         <AppContext.Provider value={data}>
            <Component2/>
         </AppContext.Provider>
        
   )
}

export default Component1;
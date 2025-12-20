import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Component6(){

    const {e} = useContext(AppContext);
    return(
        <h4>This is prop e : {e.toString()}</h4>
    )
}

export default Component6;
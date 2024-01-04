import error from "../../assets/img/error.png"

import "../../assets/Error.css"

export const Page404=()=>{
    return(
        <div className="error w-100">
            <img className=" w-100" src={error} alt="error 404" />
        </div>
    )
}


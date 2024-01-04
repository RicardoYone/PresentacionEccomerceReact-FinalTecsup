import { Navigate } from "react-router-dom";
export const Loegado = () => {
    let storage = JSON.parse(localStorage.getItem("logeado"))
    console.log(storage)



    return (
        <>
            {
                (storage === null) ? <Navigate to="/" replace={true} />
                    : <div>
                        <h1>{storage.email}</h1>
                        <img src={storage.photoURL} alt="" width={80} height={80} />
                    </div>

            }

        </>
    )
}
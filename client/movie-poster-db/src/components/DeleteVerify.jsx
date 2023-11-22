import react from "react"

function DeleteVerify ({deleteMovie, back}) {
    return (
        <>
        <h2> Do you really want to delete from favorites? </h2>
            <button onClick={deleteMovie} > Yes, sure </button>
            <button onClick={back}> No, thanks </button>
        </>
    )
}

export default DeleteVerify;
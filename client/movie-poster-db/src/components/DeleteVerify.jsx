import { useState } from "react"

function DeleteVerify({ deleteMovie }) {
const [showModal, setShowModal] = useState(true)
    return (
        <>
            <div >
                <h1>Do you really want to delete from favorites? </h1>
                <button onClick={deleteMovie} > Yes, sure </button>
                <button onClick={() => setShowModal(false)}> No, thanks </button>
            </div>
        </>
    )
}

export default DeleteVerify;
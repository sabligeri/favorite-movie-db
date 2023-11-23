import {useState} from "react"
import {Modal} from "react"

function DeleteVerify ({deleteMovie}) {

    return (
        <>
        <Modal isOpen={true}> 
            <h1>Do you really want to delete from favorites? </h1>
            <button onClick={() => deleteMovie} > Yes, sure </button>
            <button> No, thanks </button>
            </Modal>
        </>
    )
}

export default DeleteVerify;
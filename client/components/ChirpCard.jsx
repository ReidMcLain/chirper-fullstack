import React from 'react'

const ChirpCard = ({ userid, content, created, handleDeleteChirp, id }) => {
    return (
        <>
            <h3>{userid}</h3>
            <p>{content}</p>
            <small>{created}</small>
            <button onClick={() => handleDeleteChirp(id)}>
                Delete
            </button>
        </>
    )
}

export default ChirpCard;
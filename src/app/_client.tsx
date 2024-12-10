"use client";

export const handleClick = () => {
    window.alert("from client");
}

export const ClientButton = () => {
    return (
        <button onClick={handleClick}>button from client</button>
    );
}
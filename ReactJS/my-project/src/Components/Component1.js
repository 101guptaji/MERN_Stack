import React from 'react'

const Component1 = () => {
    let users = [
        {
            name: "A",
            post: "Chief Executive Officer"
        },
        {
            name: "B",
            post: "Manager"
        },
        {
            name: "C",
            post: "Worker"
        },
        {
            name: "D",
            post: "Peon"
        },
    ];

    return (
        <div>{
            users.map((item)=>{
                let {name, post} = item
                return(
                    <>
                        <h1>{name}</h1>
                        <p>{post}</p>
                    </>
                )
            })
        }
        </div>
    )
}

export default Component1
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    return (
        <div className='h-full w-full  bg-gray-600'>

            <div className='text-center m-4 text-white p-4 text-3xl'>
                Github followers: {data.followers}
                <br/>
                Github following: {data.following}
            </div>

            <div className='flex justify-evenly items-center m-4'>
                <div className='m-4'>
                    <img className='w-[700px]' src={data.avatar_url} alt="Git picture" />
                </div>

                <p className='text-yellow-100 md:text-3xl'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore unde dolorem veniam natus quos cumque aspernatur excepturi beatae a sequi, facere porro debitis, inventore quod aliquid hic, dicta laudantium quidem.
                </p>
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vishnukant5129')
    return response.json()
}
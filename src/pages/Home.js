import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <>
        
            <h1>The Home page</h1>
            <p>Go to <Link to="products">list of Products</Link></p>
        </>
    )
}

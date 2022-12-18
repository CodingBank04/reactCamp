import React from 'react'
import ProductList from '../pages/ProductList'
import Category from './Category'
import Navi from './Navi'


export default function Dashboard() {
    return (
        <div>
            <Navi />
            <Category />
            <ProductList />
        </div>


    )
}

import React from 'react'
import useStore from '../store/zustandStore'
import Category from './Category';

const CSPM = () => {
    const { dashboard } = useStore();
    return (
        <div className='m-8 sm:m-8 sm:ml-16 flex'>
            <div>
                {/* <h1 className='text-base font-semibold md:text-base lg:text-xl mb-4'>CSPM Executive Dashboard</h1> */}
                {dashboard.categories.map(category => (
                    <Category key={category.id} category={category} />
                ))}
            </div>
        </div>
    )
}

export default CSPM


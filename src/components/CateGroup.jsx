import React from 'react'
import Button from './Button'
import Container from './Container'
import { categories } from '../data/data'
import useCategoryStore from '../store/useCategoryStore'

const CateGroup = () => {
   const {categories,changeActive} = useCategoryStore();
   
  return (
    <Container>
         <div>
        <h4 className='text-xl my-2 font-semibold'>Categories</h4>
        <div className='flex cateGroup overflow-scroll gap-1'>
       
            {
                categories.map((category) => <Button changeActive = {changeActive} key={category.id} category={category}/>)
            }
        </div>
    </div>
    </Container>
  )
}

export default CateGroup
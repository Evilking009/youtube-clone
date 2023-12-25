import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

function Sidebar({ selectedCategory, setSelectedCategory }) {

    const STACK_STYLES = {
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' }
    }

    return (
        <Stack direction="row" sx={STACK_STYLES}>
            {categories.map(category => (
                <button key={category.name} className='category-btn' style={{ background: category.name === selectedCategory && '#FC1503', color: 'white' }} onClick={() => setSelectedCategory(category.name)}>
                    <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: '15px' }}>{category.icon}</span>
                    <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default Sidebar
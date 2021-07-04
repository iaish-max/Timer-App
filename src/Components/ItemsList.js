import React from 'react'

function ItemsList(props) {
    return (
        <div className='fbox'>
            {props.items.map( (items , i) => props.display(items , i)) }
        </div>
    )
}

export default ItemsList

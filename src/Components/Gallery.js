import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import GalleryItem from './GalleryItem'
import React from 'react'

const Gallery = (props) => {
    const data = useContext(DataContext)
    // const myData = props.data.result
    // const data = props.data.result.read()
    const display = data.map((item, i) => {
        return <GalleryItem key={i} item={item} />
    })
    
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
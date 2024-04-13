import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import GalleryItem from './GalleryItem'

const Gallery = () => {
    const data = useContext(DataContext)
    // const myData = data.result.read()
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
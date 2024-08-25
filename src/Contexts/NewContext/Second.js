import { useState } from "react"
import First from "./First"
import Src from './Photos/Src.webp'
import Img3 from './Photos/Img3.webp'
import Img4 from './Photos/Img4.jpg'
import Img5 from './Photos/Img5.avif'
import Img6 from './Photos/Img6.webp'
import Img7 from './Photos/Img7.jpg'
import Img9 from './Photos/Img9.jpg'
import Img10 from './Photos/Img10.jpg'
import Img11 from './Photos/Img11.jpeg'
import Img12 from './Photos/Img12.jpg'
import Img13 from './Photos/Img13.jpg'
import Img14 from './Photos/Img14.jpg'

const Second = (props)=> {
    const data = [
        {
            'id':'1',
            'image': Img3,
            'name': 'Full sleeve Crop Top',
            'price': '300',
            
        },
        {
            'id': '2',
            'image': Img4,
            'name': 'Flared White Top || (Girly)',
            'price': '500'
        },
        {
            'id': '3',
            'image': Img6,
            'name': 'Ankle length skinny Jeans|| Womens',
            'price': '1200'
        },
        {
            'id': '4',
            'image': Img5,
            'name': 'Flared Cargo Jeans (Womens Fashion)',
            'price': '700'
        },
        {
            'id': '5',
            'image': Img9,
            'name': 'Green-color Anarkali Kurta',
            'price': '1200'
        },
        {
            'id': '6',
            'image': Img7,
            'name': 'Jeans for Girls Stylish',
            'price': '350'
        },
        {
            'id': '7',
            'image': Img10,
            'name': 'Full Parrot color suit for Womens Fashion',
            'price': '1450'
        },
        {
            'id': '8',
            'image': Img12,
            'name': 'Western Gown for party-wear',
            'price': '890'
        },
        {
            'id': '9',
            'image': Img11,
            'name': 'Red-color Midi for Girls Fashion || Stylish',
            'price': '430'
        },
        {
            'id': '10',
            'image': Img13,
            'name': 'Summer short for Womens',
            'price': '450'
        },
        {
            'id': '11',
            'image': Img14,
            'name': 'Summer short for Womens',
            'price': '350'
        },
        {
            'id': '12',
            'image': Src,
            'name': 'Fish-cut sleeve top for womens style',
            'price': '550'
        },
        {
            'id': '13',
            'image': Img7,
            'name': 'Joggers || womens',
            'price': '600'
        }
    ]

    const [fashion, setFashion] = useState(data);

    return (
        <First.Provider value={{ fashion, setFashion }}>
        {props.children}
        </First.Provider>
    )
}
export default Second;
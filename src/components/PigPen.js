import Hog from './Hog'

export default function PigPen({hogs}) {
    
    const renderHogs = hogs.map(hog => <Hog key={hog.name} hog={hog}/>)

    return (
        <ul className = "ui grid container">
            {renderHogs}
        </ul>
    )
}

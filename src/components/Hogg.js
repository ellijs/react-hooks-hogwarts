// import {useState} from 'react'

// function Hogg({hog: {image, name, specialty, grease, weight, "highest medal achieved":medal}}) {

//     const Front = ({image}) => {
//       return (
//           <img src={image} alt="hog" />
//       )
//     }
//     const Back = ({name,medal, weight, specialty}) =>{
//         return (
//             <div className="pigTile" style={{width: "100%"}}>
//                 <h1>
//                    {name}
//                 </h1>
//                 <h3>
//                     {specialty}
//                 </h3>
//                 <div>{weight} Kilos</div>
//                 <div>
//                     {medal} medal achieved
//                 </div>
//                 {greased? <div>ForFun</div>: <div>NoGrease</div>}
//             </div>
//         )
//     }

//     const [showFront, setShowFront] = useState(true)
//     const toggleFront = () => {
//         setShowFront(!showFront)
//     }
//     const bProps = {
//         specialty, greased, weight, medal, name
//     }

//     return(
//         <div onclick={toggleFront} className="ui three wide column img">
//            {showFront ? <Front image={image}/>: <BACK image={...bProps}/>}
//         </div>

//     )
// }

// export default Hogg

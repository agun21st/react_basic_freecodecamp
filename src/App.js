import React from 'react';
import './style.css';
import Header from "./components/Header";
// import Meme from "./components/Meme";
import Box from "./components/Box";
import ImageList from "./components/ImageList";
// import Form from './components/Form';
import Api from './components/Api';

// function App() {
//     return (
//         <div className='App'>
//             <nav>
//                 <Header  />
//             </nav>
//         </div>
//     )
// }

function App() {
    const [imageList, setImageList] = React.useState(ImageList)
    // console.log(imageList)
    function handleSquareClick(id) {
        setImageList((prevValue) => {

            return prevValue.map((square) => {
                return square.id === id? {...square, on: !square.on}:square
            })

            // old Method
            // const newSquares = []
            // for(let i=0;i<prevValue.length;i++)
            // {
            //     const currentSquare = prevValue[i]
            //     if(currentSquare.id === id){
            //         const updatedSquare = {
            //             ...currentSquare,
            //             on: !currentSquare.on
            //         }
            //         newSquares.push(updatedSquare)
            //     }else{
            //         newSquares.push(currentSquare)
            //     }
            // }
            // return newSquares
        })
    }
    const squareElements = imageList.map(square => (
        <Box key={square.id}  on={square.on} toggle={() => handleSquareClick(square.id)} />
    ))
    return (
        <div className="App">
            <Header  />
            {/* {squareElements} */}
            {/* <Form  /> */}
            <Api />
            {/* <Meme  /> */}
        </div>
    );
}

export default App;
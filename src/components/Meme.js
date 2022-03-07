import React from "react";
import Count from "./Count"
import IncreaseButton from "./Button"
import memeimg from "../images/logo/memeimg.png";
import imageList from "./ImageList";
export default function Meme() {

    const [myInfo, setMyInfo] = React.useState({
        firstName: "Mahadi",
        lastName: "Hassan",
        age: 30,
        description: "Some example text some example text. John Doe is an architect and engineer",
        photo: "https://www.w3schools.com/bootstrap4/img_avatar1.png"
    });

    function changeObject(e){
        e.preventDefault();
        const randomNum = Math.floor(Math.random() * imageList.length)
        const photoUrl = imageList[randomNum].img
        setMyInfo((prevObject) => {
            return {...prevObject,
                age: (prevObject.age + 5),
                photo: photoUrl
            };
        })
    }


    let [num, setNum] = React.useState(5);

    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

        const thingsElement = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    function handleClick(e){
        e.preventDefault();
        console.log(...thingsArray);
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length+1}`]
        })
        setNum((prevCount) => {
            console.log(prevCount)
             return prevCount+1
        })
    }
  return (
    <div className='container'>
        <main className='mt-5'>
            <form>
                <div className="row">
                    <div className='col-12'>
                        <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                            <div className="card cardSize" >
                                <img className="card-img-top" src={myInfo.photo} alt="Card photos" />
                                <div className="card-body">
                                <h4 className="card-title">{myInfo.firstName} {myInfo.lastName}</h4>
                                <p className="card-text">Age: <Count  count={myInfo.age}/></p>
                                <p className="card-text">{myInfo.description}</p>
                                    <IncreaseButton handleclick={changeObject}  />
                                </div>
                            </div>
                            <p>{thingsElement}</p>
                            <img src={memeimg} alt="memeimg" />
                        </div>
                    </div>
                </div>
            </form>
        </main>
    </div>
  )
}

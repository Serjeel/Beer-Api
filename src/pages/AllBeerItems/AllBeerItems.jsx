import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BeerCard from "../../components/BeerCard/BeerCard";
import ComparisonModalWindow from "../ComparisonModalWindow/ComparisonModalWindow";
import ShelfImage from "../../images/shelf.png";

import './AllBeerItems.css'

const AllBeerItems = () => {
    const allBeerItems = useSelector((state) => state.beerState.allBeerItems);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    console.log(allBeerItems);

    const onClick = () => {
        setModalIsOpen(true)
    }

    return (
        <div className="main">
            <div className='beer-items'>
                <button className="comparison-button" onClick={onClick}>Comparison</button>
                <div className='beer-items-block'>
                    {
                        allBeerItems.map((beer, index) =>
                            <>
                                <BeerCard
                                    name={beer.name}
                                    image={beer.image_url}
                                    id={beer.id}
                                    key={index}
                                />
                                {(index + 1) % 5 === 0 && index !== 0 &&
                                    <img className="beer-shelf" src={ShelfImage} alt="shelf" key={"shelf-" + index} />}
                            </>
                        )}
                </div>
            </div>
            {modalIsOpen && <ComparisonModalWindow setModalIsOpen={setModalIsOpen} />}
        </div>
    )
}

export default AllBeerItems;
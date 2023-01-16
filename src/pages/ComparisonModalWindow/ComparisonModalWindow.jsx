import { useState } from 'react';
import { useSelector } from 'react-redux';
import CloseIcon from '../../images/Close.svg';
import './ComparisonModalWindow.css'

const ComparisonModalWindow = ({ setModalIsOpen }) => {
    const allBeerItems = useSelector((state) => state.beerState.allBeerItems);

    const [beerName1, setBeerName1] = useState('');
    const [beerName2, setBeerName2] = useState('');

    const [beerItem1, setBeerItem1] = useState({});
    const [beerItem2, setBeerItem2] = useState({});

    const handleChangeBeerName1 = (value) => {
        console.log(value);
        console.log(beerName1);
        if (value !== "") {
            const beer = allBeerItems.find(item => item.name === value);
            setBeerItem1(beer);
        } else {
            setBeerItem1({});
        }
        setBeerName1(value);
    }

    const handleChangeBeerName2 = (value) => {
        console.log(value);
        console.log(beerName2);

        if (value !== "") {
            const beer = allBeerItems.find(item => item.name === value)
            setBeerItem2(beer);
        } else {
            setBeerItem2({});
        }
        setBeerName2(value);
    }

    const closeIconClick = () => {
        setModalIsOpen(false)
    }

    return (
        <div className="modal-window">
            <div className="modal-content">
                <div className='close-icon-block'>
                    <img
                        className='close-icon'
                        src={CloseIcon}
                        onClick={() => closeIconClick()} />
                </div>
                <p className='modal-header'>Select a beer to compare</p>
                <div className='comparison-block'>
                    <select
                        className='beer-comparison'
                        value={beerName1}
                        onChange={(e) => handleChangeBeerName1(e.target.value)}>

                        <option></option>

                        {allBeerItems.map(item => (
                            <option>{item.name}</option>
                        ))}
                    </select>
                    <select
                        className='beer-comparison'
                        value={beerName2}
                        onChange={(e) => handleChangeBeerName2(e.target.value)}>

                        <option></option>
                        {allBeerItems.map(item => (
                            <option>{item.name}</option>
                        ))}
                    </select>
                </div>
                {(beerName1 !== "" && beerName2 !== "") &&
                    <>
                        <div className='percentage-block'>
                            <p>{beerItem1.abv}%</p>
                            <p>{beerItem2.abv}%</p>
                        </div>
                        <div>
                            <progress
                                value={beerItem1.abv}
                                max={beerItem1.abv > beerItem2.abv ? beerItem1.abv : beerItem2.abv}
                                className='beer-scale'>
                            </progress>
                            <progress
                                value={beerItem2.abv}
                                max={beerItem1.abv > beerItem2.abv ? beerItem1.abv : beerItem2.abv}
                                className='beer-scale'>

                            </progress>
                        </div>
                        <div className='beer-comparison-image-block'>
                            <div className='beer-comparison-image-wrapper'>
                                <img
                                    className='beer-comparison-image'
                                    src={beerItem1.image_url}
                                    alt={beerItem1.name}
                                />
                            </div>
                            <div className='beer-comparison-image-wrapper'>
                                <img
                                    className='beer-comparison-image'
                                    src={beerItem2.image_url}
                                    alt={beerItem2.name}
                                />
                            </div>
                        </div>
                    </>
                }
            </div>

        </div>
    )
}

export default ComparisonModalWindow
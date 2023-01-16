import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import './SelectedBeer.css'

const SelectedBeer = () => {
    const allBeerItems = useSelector((state) => state.beerState.allBeerItems);
    const history = useHistory();
    const searchParams = new URLSearchParams(history.location.pathname);
    const beerId = parseInt(searchParams.get('beer'));
    const beerInform = allBeerItems.find(item => item.id === beerId) || [];

    // Для сравнения возмжно стоит сделать рядом выдвижной список с другими пивами и по выбору сравнивать
    // Или на главной странице сделать кнопку Сравнить, при нажатии на которую можно будет выбирать пиво в 
    // отдельной модалке
    
    console.log(allBeerItems);
    console.log(beerId);
    console.log(beerInform);

    return (
        <div className="selected-beer">
            <div className="description">
                <p className="line">Name: {beerInform.name}</p>
                <p className="line">Strength: {beerInform.abv}%</p>
                <p className="line">Description: {beerInform.description}</p>
            </div>
        </div>
    )
}

export default SelectedBeer;
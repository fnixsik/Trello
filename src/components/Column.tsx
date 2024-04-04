import { ReactSortable } from "react-sortablejs";
import { CardType } from "./Board";
import { SetStateAction } from "react";

type ColumnProps ={
    id: string;
    name: string;
    cards: CardType[];
    setCards: SetStateAction<any>;
};

const Columns = ({id, name, cards, setCards}: ColumnProps) => {

    function setCardsForColumn(sortedCards: CardType[], columnId: string){
        console.log({sortedCards,columnId})
        //time 54:50
        // setCards()
    }

    return ( 
        <div className="w-36 bg-white shadow-sm rounded-md p-2">
            <h3>
                {name}
            </h3>
            <ReactSortable
                list={cards} 
                setList={cards => setCardsForColumn(cards, id)}
                group="cards"
            >
                {cards.map( card =>(
                    <div className="border my-2 p-2 rounded-md">
                        <span>
                            {card.name}
                        </span>
                    </div>))
                }
            </ReactSortable>
        </div>
    );
}
 
export default Columns;
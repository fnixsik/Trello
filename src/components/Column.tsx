import { ReactSortable } from "react-sortablejs";
import { CardType } from "./Board";

type ColumnProps ={
    id: string;
    name: string;
    cards: CardType[];
    setCards: (cards:any[]) => void;
};

const Columns = ({id,name, cards, setCards}: ColumnProps) => {
    console.log('name ', name)
    console.log('cards ', cards)
    function setCardsForColumn(cards: CardType[],columnId: string){
        console.log({cards, columnId})
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
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

    function setCardsForColumn(sortedCards: CardType[], newColumnId: string){

        setCards((prevCards:CardType[])=>{
            const newCards = [...prevCards];
            sortedCards.forEach((sortedCard: CardType, newIndex:number)=>{
                const foundCard = newCards.find(newCard => newCard.id === sortedCard.id);
                if(foundCard){
                    foundCard.index = newIndex;
                    foundCard.columnId = newColumnId;
                }
            })
            return newCards;
        })

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
                    <div key={card.id} className="border my-2 p-2 rounded-md">
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
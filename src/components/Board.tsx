'use client'
import { useState } from "react";
import Column from "./Column";
import NewColumnForm from "./forms/NewColumnForm";

export type CardType = {
    name: string;
    id: string | number;
    index: number;
    columnId: string;
}

const defoultcolumns = [
    {id: '1', name: 'todo', index: 0},
    {id: '2', name: 'in progress', index: 1},
    {id: '3', name: 'done', index: 2},
]

const defoultCards = [
    {id: '123', name: 'Task 1', index: 0, columnId: '1'},
    {id: '1234', name: 'Task 1.2', index: 0, columnId: '1'},
    {id: '1231', name: 'Task 2', index: 1, columnId: '2'},
    {id: '12312', name: 'Task 3', index: 2, columnId: '3'},
];

const Board = () => {

    const [cards, setCards] = useState(defoultCards);
    const [columns, setColumns] = useState(defoultcolumns);


    return ( 
        <div className="flex gap-4">
            {
                columns.map(colum =>(
                    <Column 
                    {...colum}
                    setCards={setCards}
                    cards={cards.filter(c=> c.columnId === colum.id)}/>
                ))
            }
            <NewColumnForm

            />
        </div>
     );
}
 
export default Board;
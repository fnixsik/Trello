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
    {id: 'col1', name: 'todo', index: 0},
    {id: 'col2', name: 'in progress', index: 1},
    {id: 'col3', name: 'done', index: 2},
]

const defoultCards = [
    {id: 'qwe', name: 'Task 1', index: 1, columnId: 'col1'},
    {id: 'qwr', name: 'Task 1.2', index: 0, columnId: 'col1'},
    {id: 'qwt', name: 'Task 2', index: 1, columnId: 'col2'},
    {id: 'qwy', name: 'Task 3', index: 2, columnId: 'col3'},
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
                    cards={cards
                        .sort((a,b) => a.index - b.index)
                        .filter(c=> c.columnId === colum.id)}/>
                ))
            }
            <NewColumnForm

            />
        </div>
     );
}
 
export default Board;
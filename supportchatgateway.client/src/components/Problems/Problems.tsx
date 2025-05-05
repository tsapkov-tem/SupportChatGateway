import React, { useEffect, useState } from "react";
import { Problem } from "../../types/Problem";
import { RoblemElement } from "./ProblemElement/problemElement";
import "./Problems.css";

const Problems: React.FC = () => {
    const [problems, setProblems] = useState<Problem[]>([]);

    useEffect(() => {
        setProblems(
            [
                { id: '0', startMessage: 'Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.', problemsStatus: 'unopened', problemEvaluation: 0 },
                { id: '1', startMessage: 'Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.', problemsStatus: 'open', problemEvaluation: 5 },
                { id: '2', startMessage: 'Phasellus Sed ac orci et nisi venenatis pharetra ac non arcu.', problemsStatus: 'open', problemEvaluation: 4 },
                { id: '3', startMessage: 'Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.', problemsStatus: 'open', problemEvaluation: 0 },
                { id: '4', startMessage: 'Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.', problemsStatus: 'closed', problemEvaluation: 3 },
                { id: '5', startMessage: 'Phasellus feugiat turpis quis mollis lacinia.natis pharetra ac non arcu.', problemsStatus: 'open', problemEvaluation: 2 },
                { id: '6', startMessage: 'Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.', problemsStatus: 'closed', problemEvaluation: 0 },
                { id: '7', startMessage: 'Phasellus feugiat turpis quis mollis lacinia. Sed ac orci Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu. et nisi venenatis pharetra ac non arcu.', problemsStatus: 'open', problemEvaluation: 0 },
                { id: '8', startMessage: 'Phasellus feugiat turpis quis mollis ia. Sed ac orci et nisi venenatis pharetra ac non arcu.', problemsStatus: 'open', problemEvaluation: 0 },
                { id: '9', startMessage: 'Phasellus feugiat turpis quis mollis laci venenatis pharetra ac non arcu.', problemsStatus: 'canceled', problemEvaluation: 1 },
            ]
        );
    }, [])

    return (
        <main className="problems">
            <h2 className="problems__title">Список проблем</h2>
            <ul className="problems__list">
                {problems.map((problem) => (
                    <RoblemElement key={problem.id} problem={problem} />
                ))}
            </ul>
        </main>
    );
}

export default Problems;
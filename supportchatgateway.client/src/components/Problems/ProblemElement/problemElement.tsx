import React from "react";
import { Problem } from "../../../types/Problem";
import "./ProblemElement.css"

interface ProblemElementProps {
    problem: Problem; 
} 

export const RoblemElement : React.FC<ProblemElementProps> = ({ problem }) => {

    const renderStars = (stars: number) => {
        return "★".repeat(stars) + "☆".repeat(5 - stars);
    };

    return <li key={problem.id} className={`problem-element status-${problem.problemsStatus}`}>
        <p className="problem-element__message">{problem.startMessage}</p>
        <p className="problem-element__details">
            <span className="problem-element__status">{problem.problemsStatus}</span>
            <span className={`problem-element__evaluation star-${problem.problemEvaluation}`}>{renderStars(problem.problemEvaluation)}</span>
        </p>
        <button className={`problem-element__button status-${problem.problemsStatus}`}>Открыть чат</button>
    </li>
}
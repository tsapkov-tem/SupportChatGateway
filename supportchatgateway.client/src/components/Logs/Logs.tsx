import React, { useEffect, useState } from "react";
import { Log } from "../../types/Log";
import { LogElement } from "./LogElement/LogElement";
import "./Logs.css"

const Logs: React.FC = () => {
    const [logs, setLogs] = useState<Log[]>([]);

    // useEffect(() => {
    //     logService.startConnection().then(() => {
    //         logService.onReceiveLog((log: Log) => {
    //             setLogs((prevLogs) => [...prevLogs, log]);
    //         })
    //     });

    //     return () => {
    //         logService.stopConnection();
    //     }

    // }, []);

    useEffect(() => {
        setLogs([
            { id: '1', code: '401', supportName: 'Tomas', supportType: 'admin', problemEvaluation: 0 },
            { id: '2', code: '402', supportName: 'Jack', supportType: 'supp', problemEvaluation: 3 },
            { id: '3', code: '403', supportName: 'Jack', supportType: 'supp', problemEvaluation: 2 },
            { id: '4', code: '404', supportName: 'Tomas', supportType: 'admin', problemEvaluation: 5 },
            { id: '5', code: '405', supportName: 'Jack', supportType: 'supp', problemEvaluation: 3 },
            { id: '6', code: '406', supportName: 'Tomas', supportType: 'admin', problemEvaluation: 3 },
            { id: '7', code: '407', supportName: 'Ron', supportType: 'supp', problemEvaluation: 5 },
            { id: '8', code: '408', supportName: 'Ron', supportType: 'supp', problemEvaluation: 1 },
            { id: '9', code: '409', supportName: 'Tomas', supportType: 'admin', problemEvaluation: 4 },
            { id: '0', code: '400', supportName: 'Ron', supportType: 'supp', problemEvaluation: 4 },
        ]);
    }, [])

    return (
        <main className="logs">
            <h1 className="logs__title">Отчеты по проблемам</h1>
            <ul className="logs__list">
                {logs.map((log) => (
                    <LogElement key={log.id} log={log} />
                ))}
            </ul>
        </main>
    );
}

export default Logs;
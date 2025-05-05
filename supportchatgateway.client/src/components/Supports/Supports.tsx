import React, { useEffect, useState } from "react";
import { Support, SupportStatus } from "../../types/Support"
import { SupportElement } from "./SupportElement/SupportElement";
import "./Supports.css";


const Supports: React.FC = () => {
    const [supports, setSupports] = useState<Support[]>([]);

    useEffect(() => {
        setSupports(
            [
                { supportName: "Jack", supportLastName: "Black", supportType: "admin", supportStatus: SupportStatus.Online },
                { supportName: "Thomas", supportLastName: "Mraz", supportType: "standart", supportStatus: SupportStatus.Online },
                { supportName: "Ron", supportLastName: "Wuizly", supportType: "standart", supportStatus: SupportStatus.Ofline },
                { supportName: "Ron", supportLastName: "Wuizly", supportType: "standart", supportStatus: SupportStatus.Ofline },
                { supportName: "Ron", supportLastName: "Wuizly", supportType: "standart", supportStatus: SupportStatus.Ofline },
                { supportName: "Ron", supportLastName: "Wuizly", supportType: "standart", supportStatus: SupportStatus.Ofline },
                { supportName: "Ron", supportLastName: "Wuizly", supportType: "standart", supportStatus: SupportStatus.Ofline },
                { supportName: "Ron", supportLastName: "Wuizly", supportType: "standart", supportStatus: SupportStatus.Ofline },
                { supportName: "Ron", supportLastName: "Wuizly", supportType: "standart", supportStatus: SupportStatus.Ofline },
            ]
        );
    }, [])

    return (
        <main className="supports">
            <h2 className="supports__title">Специалисты поддержки</h2>
            <ul className="supports__list">
                {supports.map((support) => (
                    <SupportElement support={support} />
                ))}
            </ul>
        </main>
    );
}

export default Supports;
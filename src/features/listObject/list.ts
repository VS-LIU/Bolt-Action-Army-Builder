import { v4 as uuidv4 } from 'uuid';

// ██╗      ██╗ ███████╗ ████████╗     ██████╗  ██████╗       ██╗ ███████╗  ██████╗ ████████╗
// ██║      ██║ ██╔════╝ ╚══██╔══╝    ██╔═══██╗ ██╔══██╗      ██║ ██╔════╝ ██╔════╝ ╚══██╔══╝
// ██║      ██║ ███████╗    ██║       ██║   ██║ ██████╔╝      ██║ █████╗   ██║         ██║   
// ██║      ██║ ╚════██║    ██║       ██║   ██║ ██╔══██╗ ██   ██║ ██╔══╝   ██║         ██║   
// ███████╗ ██║ ███████║    ██║       ╚██████╔╝ ██████╔╝ ╚█████╔╝ ███████╗ ╚██████╗    ██║   
// ╚══════╝ ╚═╝ ╚══════╝    ╚═╝        ╚═════╝  ╚═════╝   ╚════╝  ╚══════╝  ╚═════╝    ╚═╝  

type pointsCounter = {
    "valueCurrent": number,
    "isActive": boolean,
    "isVisible": boolean
}

export class ArmyList {
    listName: string;
    listID: string = uuidv4();
    listOwner: string = "+++TODO";
    listDescription: string | null = null;
    listPointsTotal: pointsCounter = {
        "valueCurrent": 0,
        "isActive": true,
        "isVisible": true
    }

    constructor(listName: string,
    ) {
        this.listName = listName;
    }
}

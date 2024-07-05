import { BoltActionList } from "../../listObject/list";

export function createNewList() {
    const activeList = new BoltActionList("Test_List_Name");
    console.log("Creating new list object and setting it to active: ", activeList);
    return activeList;
}


export default function CreateButton() {
    return (
        <button onClick={createNewList}>+New List</button>
    );
}
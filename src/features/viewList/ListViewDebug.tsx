import '../app/App.css'

/**
 * Displays the list object in plain text.
 * 
 * 
 */


export function ListViewDebug({objectList}: any) {
// export function ListViewDebug() {
    return (

        <div className="border-grey-box">
            <h3> LIST object (backend)</h3>
            <div>
                {objectList}
            </div>
        </div >

    )
}
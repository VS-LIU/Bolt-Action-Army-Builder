import '/src/app/App.css'

/**
 * Displays the list object in plain text.
 * 
 * 
 */


export default function ListViewDebug({objectList}: any) {
    return (

        <div className="border-grey-box">
            <h3> LIST view - Debug</h3>
            <div>

            <pre className='pre-align-left'>{JSON.stringify(objectList, null, 2)}</pre>
            </div>
        </div >

    )
}
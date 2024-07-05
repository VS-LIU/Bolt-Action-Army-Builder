import '/src/app/App.css'

/**
 * Displays the list object in plain text.
 * 
 * 
 */


export default function ListObjectDebug({objectList}: any) {
    return (

        <div className="border-grey-box">
            <h3> LIST object - Debug</h3>
            <div>

            <pre className='pre-align-left'>{JSON.stringify(objectList, null, 2)}</pre>
            </div>
        </div >

    )
}
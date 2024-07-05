import '/src/app/App.css'

/**
 * Displays the list object in plain text.
 * 
 * 
 */


export default function PlatoonViewDebug({objectList}: any) {
    return (

        <div className="border-grey-box">
            <h3> Platoon View - Debug</h3>
            <div>

            <pre className='pre-align-left'>{JSON.stringify(objectList, null, 2)}</pre>
            </div>
        </div >

    )
}


// export default PlatoonViewDebug
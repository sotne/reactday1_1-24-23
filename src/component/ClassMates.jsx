import React from 'react'

export default function classMates(props) {
    const tableHeaders = ['#', 'First', 'last']
  return (
    <div>
        <h1 className="text-center" my-3> These are my Classmates</h1>

        <table className='table table-primary table-striped'>
            <thead>
                <tr>
                    {tableHeaders.map((th,i) => <th key={i}>{th}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.mates.map( mates =>(
                    <tr key={mates.id}>
                        <th>{mates.id}</th>
                        <th>{mates.first_name}</th>
                        <th>{mates.last_name}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    
  )
}

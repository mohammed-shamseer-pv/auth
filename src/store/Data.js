import {createContext,useState} from 'react'

export const DataContext=createContext(null)

function Data ({children}){
    const [dataDetiles,setDataDetils]=useState()

    return(
        <DataContext.Provider value={{dataDetiles,setDataDetils}}>
            {children}
        </DataContext.Provider>
    )
}

export default Data
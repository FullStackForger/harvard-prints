import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { Print, PrintProps } from "./Print";
export type PrintsProps = {
    endpoint: string 
}

export const Prints: FC<PrintsProps> = ({ endpoint }) => {
    
    const [records, setRecords] = useState([])
    const [info, setInfo] = useState({})


    useEffect(() => {            
        const fetchData = async (endpoint: string ) => {
            const { data } : any = await axios.get(endpoint)            
            const { records, info } = data            
            setRecords(records)
            setInfo(info)
        }
        fetchData(endpoint)        
        return () => {}
    }, [])
    
    
    return (
        
        <div>
            <h2>Harvard Prints</h2>
            <hr />
            {JSON.stringify(info, null, 2)}

            <hr />
        </div>
    )
}
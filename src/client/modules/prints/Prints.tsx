import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { Print, PrintProps } from './Print'
export type PrintsProps = {
    endpoint: string 
}

export const Prints: FC<PrintsProps> = ({ endpoint }) => {
    
    const [error, setError] = useState<string | null>(null)
    const [records, setRecords] = useState<PrintProps[]>([])
    const [info, setInfo] = useState({})


    useEffect(() => {            
        const fetchData = async (endpoint: string ) => {            
            try {
                const req = await axios.get(endpoint)            
                const { records, info } = req.data
                setRecords(records)
                setInfo(info)
                setError(null)
            } catch (e) { 
                setRecords([])
                setInfo({})
                setError('Service not available. Try again later.')                
                return
            }            
        }
        
        fetchData(endpoint)
        return () => { /* noop */ }
    }, [])
    
    
    return (        
        <div>
            <h2>Harvard Prints</h2>
            <hr />
            {error && <div role='alert'>{error}</div>}
            {!error && JSON.stringify(info, null, 2)}            
            <div>
                {!error && records.map((record: PrintProps) => (<Print key={record.id} {...record} />))}
            </div>
            <hr />
        </div>
    )
}

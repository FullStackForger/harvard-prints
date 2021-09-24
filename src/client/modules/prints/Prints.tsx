import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


import { ImageModal } from '../../components/image-modal/ImageModal'
import { Print, PrintProps } from './Print'

export type PrintsProps = {
    endpoint: string 
}

export const Prints: FC<PrintsProps> = ({ endpoint }) => {
    
    const [modalSrc, setModalSrc] = useState<string | null>(null);
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
      <div style={{margin: '40px 0 80px'}}>       
        <Container fluid="md">            
          {error && <div role='alert'>{error}</div>}          
          <Row xs={1} md={2} className="g-4">
              {!error && records.map((record: PrintProps) => (
              <Col key={record.id}><Print {...record} onClick={() => setModalSrc(record.primaryimageurl)} /></Col>
              ))}
          </Row>            
        </Container>       
        <ImageModal
          show={!!modalSrc}
          src={modalSrc}
          onHide={() => setModalSrc(null)}
        />              
      </div>
    )
}

import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import { Print, PrintProps } from './Print'
import { ImageModal } from '../../components/image-modal/ImageModal'
import { PagePagination } from '../../components/page-pagination/PagePagination'

export type PrintsProps = {
    endpoint: string 
}

type PrintInfo = { page: number | null, pages: number}
const emptyInfo: PrintInfo = { page: null, pages: 0 }

export const Prints: FC<PrintsProps> = ({ endpoint }) => {
    
    const [modalSrc, setModalSrc] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null)
    const [records, setRecords] = useState<PrintProps[]>([])
    const [info, setInfo] = useState(emptyInfo)    
    const [current, setCurrent] = useState(1)

    useEffect(() => {            
        const fetchData = async (endpoint: string ) => {            
            try {
                const pageParam = current > 0 ? `page=${current}` : ''
                const req = await axios.get(`${endpoint}?${pageParam}`)            
                const { records, info } = req.data
                setRecords(records)
                setInfo(info)
                setCurrent(info.page)
                setError(null)
            } catch (e) { 
                setRecords([])
                setInfo(emptyInfo)
                setError('Service not available. Try again later.')                
                return
            }            
        }

        if (current !== info.page) {
          fetchData(endpoint)
        }
        return () => { /* noop */ }
    }, [current])
    
    const handlePageClick = (val: number):void => {
      setCurrent(val)
    }
    
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
        <Navbar bg="light" variant="light" fixed="bottom" style={{borderTop: '2px solid #dedede'}}>
          <Container className="justify-content-center">           
                {info.page && info.pages && <PagePagination current={info.page} last={info.pages} onClick={handlePageClick} />}
          </Container>
        </Navbar>  
      </div>
    )
}

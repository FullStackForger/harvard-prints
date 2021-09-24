import { FC } from 'react'
import cx from 'classnames'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './print.scss?global'

export type PrintProps = {
    id: string
    title: string
    creditline: string
    copyright: string
    primaryimageurl?: string
    onClick?: () => void
}

export const Print: FC<PrintProps> = (props) => {
    const { title, creditline, copyright, primaryimageurl, onClick } = props    
    const imgSrc = primaryimageurl || '/images/missing-image.jpeg'
    return (
        <Card className="print">            
            <Card.Body>
            <Row>
                <Col xs={4}>
                  <Image 
                    src={imgSrc} 
                    rounded 
                    className={cx('float-left', { interactive: !!primaryimageurl })} 
                    onClick={onClick}
                    alt={title}
                  />
                </Col>
                <Col xs={8}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>        
                    <span>{creditline}</span>
                    <span>{copyright}</span>            
                </Card.Text>
                </Col>
              </Row>
            </Card.Body>
        </Card>
    )
}

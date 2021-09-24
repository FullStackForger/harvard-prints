import { FC } from "react"
import Pagination from 'react-bootstrap/Pagination'
import { getPageEllipsis } from "./pageUtil"

export type PagePaginationProps = {
  current: number
  first?: number
  spread?: number
  last: number
  onClick: (val: number) => void
}

export const PagePagination: FC<PagePaginationProps> = (props:PagePaginationProps) => {
  const { current, first = 1, last, spread = 3, onClick } =  props
  const handleFirst = () => onClick(first)  
  const handleLast = () => onClick(last)
  const handlePrev = () => {
    if (current - 1 >= first) {
      onClick(current - 1)
    } 
  }

  const handleNext = () => {
    if (current +1 <= last) {
      onClick(current + 1)
    } 
  }

  const pages = getPageEllipsis({ first, last, current })  
  return (
    <Pagination size="sm" style={{margin: 0}}>
      <Pagination.First onClick={handleFirst} />
      <Pagination.Prev onClick={handlePrev} />      
      { pages[0] !== first && <Pagination.Ellipsis /> }
      { pages.map((v) => (
        <Pagination.Item 
          key={v} 
          active={v === current} 
          onClick={() => onClick(v)}
        >{v}</Pagination.Item>
      ))}
      { pages[pages.length - 1] !== last && <Pagination.Ellipsis /> }
      <Pagination.Next onClick={handleNext} />
      <Pagination.Last onClick={handleLast}/>
    </Pagination>
  )
}

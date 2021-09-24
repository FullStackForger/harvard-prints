export type PageSpreadParams = {
  current: number, 
  first?: number, 
  last: number, 
  spread?: number
}

export const getPageEllipsis = ({ current, first = 1, last, spread = 5 }: PageSpreadParams):number[] => {
  const halfSpread = Math.floor(spread / 2)
  const pages = []
  for(let i = current - halfSpread; i <= current + halfSpread; i++) {
    pages.push(i)
  }

  const paddedPages = pages.filter(val => val >= first && val <= last)  
  if (paddedPages.length === 1 + last - first) {
    return paddedPages
  }

  while(paddedPages.length < spread) {
    if (paddedPages[0] === first)  {
      // add to the right
      paddedPages.push(paddedPages[paddedPages.length-1] + 1)
      continue
    }
    if (paddedPages[paddedPages.length-1] === last)  {
      // add to the left
      paddedPages.unshift(paddedPages[0] - 1)
    }    
  }
  return paddedPages
}

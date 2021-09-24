import { getPageEllipsis } from "./pageUtil"

describe('page utilities', () => {
  describe('getPageEllipsis()', () => {
    fit('returns starting page numbers', () => {
            
      expect(getPageEllipsis({ 
        last: 10,
        current: 1
      })).toEqual([1,2,3,4,5])
    })

    fit('returns starting padded page numbers', () => {
      expect(getPageEllipsis({ 
        last: 10,
        current: 2
      })).toEqual([1,2,3,4,5])
    })

    fit('returns ending page numbers', () => {
      expect(getPageEllipsis({ 
        last: 10,
        current: 10
      })).toEqual([6,7,8,9,10])
    })

    fit('returns ending padded page numbers', () => {
      expect(getPageEllipsis({ 
        last: 10,
        current: 9
      })).toEqual([6,7,8,9,10])
    })

    fit('returns middle to the right page numbers', () => {
      expect(getPageEllipsis({ 
        last: 10,
        current: 7
      })).toEqual([5,6,7,8,9])
    })

    fit('returns middles to the left page numbers', () => {
      expect(getPageEllipsis({ 
        last: 10,
        current: 4
      })).toEqual([2,3,4,5,6])
    })
  })
})

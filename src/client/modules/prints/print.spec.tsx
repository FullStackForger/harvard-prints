import { render } from '@testing-library/react'
import { Print, PrintProps } from './Print'
import { createTestPrintProps } from './print.mocks'



describe('Print component', () => {
    it('renders details', (): void => {
      const print = createTestPrintProps()
        const { getByText } = render(<Print {...print} />)
      
        expect(getByText(print.title)).toBeInTheDocument()
        expect(getByText(print.creditline)).toBeInTheDocument()
        expect(getByText(print.copyright)).toBeInTheDocument()
    })
    
    it('renders with an image', ():void => {
        const print = createTestPrintProps()
        const { title, primaryimageurl } = print
        const { getByAltText } = render(<Print {...print} />)
        expect(getByAltText(title)).toBeInTheDocument()

        const { src } = (getByAltText(title) as HTMLImageElement)
        expect(src).toBe(primaryimageurl)
    })

})

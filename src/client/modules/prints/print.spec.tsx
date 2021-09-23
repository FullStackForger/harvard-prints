import { render } from "@testing-library/react"
import { Print, PrintProps } from "./Print"
import { createTestPrintProps } from "./print.mocks"



describe('Print component', () => {
    it.each(['title', 'creditline', 'copyright'])('renders with %s', (key: string): void => {
        const print = createTestPrintProps()
        const { getByText } = render(<Print {...print} />)
        expect(getByText(print[key as keyof PrintProps])).toBeInTheDocument()
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
import { render } from "@testing-library/react"
import { Print } from "./Print"
import { createTestPrint } from "./print.mocks"

describe('Print', () => {
    it('Renders print details', () => {
        
        const print = createTestPrint()
        render(<Print {...print} />)
    })
})
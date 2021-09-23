import { render } from "@testing-library/react"
import { Prints } from "./Prints"

describe('Prints', () => {
    it('renders prints', () => {
        const { getByText } = render(<Prints />)
        expect(getByText('Harvard Prints')).toBeInTheDocument()
    })
})
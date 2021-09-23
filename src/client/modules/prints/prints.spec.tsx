import { render, waitFor } from '@testing-library/react'
import { Prints } from './Prints'
import axios from 'axios'
import { PrintProps } from './Print'
import { createTestPrintProps } from './print.mocks'


describe('Prints component', () => {

    afterEach(jest.resetAllMocks)

    it('calls /prints endpoint', async () => {        
        const payload = { data: { records: [] as PrintProps[], info: {}} }
        const getSpy = jest.spyOn(axios, "get").mockResolvedValueOnce(payload)        
        const endpoint = 'localhost:9999/api/prints'
        const { getByText } = render(<Prints endpoint={endpoint} />)
        
        await waitFor(() => {
            expect(getByText('Harvard Prints')).toBeInTheDocument()

            expect(getSpy).toHaveBeenCalledTimes(1)
            expect(getSpy).toHaveBeenCalledWith(endpoint)        
        })        
    })

    it('renders prints', async () => {
        const printOne: Partial<PrintProps> =  {
            id: 'test-print-1',
            title: 'Test Print One'
        }

        const printTwo: Partial<PrintProps> =  {
            id: 'test-print-2',
            title: 'Test Print Two'
        }

        const payload = { 
            data: { 
                records: [
                    createTestPrintProps(printOne),
                    createTestPrintProps(printTwo)
                ], 
                info: {}
            }
        }

        const getSpy = jest.spyOn(axios, "get").mockResolvedValueOnce(payload)
        const { getByText, queryByRole } = render(<Prints endpoint={'http://test.endpoint'} />)
        
        await waitFor(() => {
            expect(getByText('Harvard Prints')).toBeInTheDocument()

            expect(getSpy).toHaveBeenCalledTimes(1)
            expect(queryByRole('alert')).not.toBeInTheDocument()
        })        
    })

    it('handles request failure', async () => {
        const getSpy = jest.spyOn(axios, "get").mockRejectedValue(new Error('random error'))                
      
        const { getByText, getByRole } = render(<Prints endpoint={'http://test.endpoint'} />)
        
        await waitFor(() => {
            expect(getSpy).toHaveBeenCalledTimes(1)            
            expect(getByRole('alert').innerHTML).toBe('Service not available. Try again later.')
        })
        
    })
})
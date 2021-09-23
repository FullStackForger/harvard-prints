import { PrintProps } from "./Print";

export const createTestPrintProps = ():PrintProps => ({
    id: 'test-print-id',
    title: 'Test Print Title',
    creditline: 'Test print credit line',
    copyright: 'John Smith / Test Writers Sociaty',
    primaryimageurl: 'http://testprint.com/amazing-print.png'
})

import React, { FC } from 'react'
import { Prints } from './modules/prints/Prints'


const endpoint = 'http://localhost:9100/api/prints'

const App: FC = () => {
    return <Prints endpoint={endpoint} />
}

export default App
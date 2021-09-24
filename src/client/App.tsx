import { FC } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Prints } from './modules/prints/Prints'

import './static/styles/main.scss?global'

const endpoint = 'http://localhost:9100/api/prints'

const App: FC = () => {
    return <>
      <Navbar bg="dark" variant="dark" sticky="top" >
        <Container>           
          <Navbar.Brand href="/">Harvard Prints</Navbar.Brand>    
        </Container>
      </Navbar>
      <Prints endpoint={endpoint} />
    </>
}

export default App

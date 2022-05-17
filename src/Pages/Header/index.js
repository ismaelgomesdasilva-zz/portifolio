import {Container, Navlink} from './styles' 
import logo from '../../Assets/logo.svg'
export default function Header() {
    return (
        <>
        <Container>
        <img src={logo}/>
            <Navlink>

            <a href='#'>Home</a>
            <a href='#'>Apresentação</a>
            <a href='#'>Habilidades</a>
            <a href='#'>Experiencias</a>
            
            </Navlink>
            <div>

            <button>Contrate-me</button>
            </div>
        </Container>
        </>
    )
}

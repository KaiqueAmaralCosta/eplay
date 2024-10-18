import { Container, SectionTitle, Link, FooterSection, Links } from './styles'

// ano
const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories#action">Açao</Link>
          </li>
          <li>
            <Link to="/categories#sports">Esportes</Link>
          </li>
          <li>
            <Link to="/categories#simulation">Simulacao</Link>
          </li>
          <li>
            <Link to="/categories#fight">Luta</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rapido</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">Promocoes</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Em breve</Link>
          </li>
        </Links>
      </FooterSection>

      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer

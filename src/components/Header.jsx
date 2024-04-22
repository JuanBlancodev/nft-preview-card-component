import styled from 'styled-components'
import PropTypes from 'prop-types'
import Image from './Image'

const HeaderContainer = styled.header`
  display: grid;
  gap: 25px;
`

const Header = ({ image, name, id }) => {
  return (
    <HeaderContainer>
      <Image image={image} />
      <h1 className='fs-large hover'> { name } #{id} </h1>
    </HeaderContainer>
  )
}

Header.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Header
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Header from './Header'

const Wrapper = styled.section`
  max-width: 320px;
  width: 100%;
  height: 500px;

  margin: 60px auto;
  padding: 25px;

  border-radius: 20px;
`

const Card = ({ info }) => {
  return (
    <Wrapper className='bg-card'>
      <Header name={info.name} cryptoImage={info.image} />
    </Wrapper>
  )
}

Card.propTypes = {
  info: PropTypes.object.isRequired
}

export default Card
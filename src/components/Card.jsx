import styled from 'styled-components'
import PropTypes from 'prop-types'

import Header from './Header'
import Info from './Info'
import Footer from './Footer'

const Wrapper = styled.section`
  max-width: 320px;
  width: 100%;
  height: 530px;

  margin: 60px auto;
  padding: 25px;

  border-radius: 15px;

  gap: 15px;
`

const Hr = styled.hr`
  border: 0.5px solid var(--color-line);
`

const Card = ({ info }) => {
  return (
    <Wrapper className='bg-card flex flex-column'>
      <Header image={info.image} name={info.name} id={info.id} />
      <Info description={info.description} value={info.value} daysLeft={info.daysLeft} />
      <Hr />
      <Footer firstName={info.owner.firstName} lastName={info.owner.lastName} avatar={info.owner.avatar} />
    </Wrapper>
  )
}

Card.propTypes = {
  info: PropTypes.object.isRequired
}

export default Card
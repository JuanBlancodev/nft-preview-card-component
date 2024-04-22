import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;

  border-radius: 10px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Image = ({ image }) => {
  return (
    <Container>
      <Img src={`assets/${image}`} alt="" />
    </Container>
  )
}

Image.propTypes = {
  image: PropTypes.string.isRequired
}

export default Image
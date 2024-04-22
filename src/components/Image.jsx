import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  position: relative;
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

const Hover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: var(--color-primary);

  opacity: 0;
  cursor: pointer;

  transition: opacity 0.25s;

  &:hover{
    opacity: 0.75;
  }
`

const Image = ({ image }) => {
  return (
    <Container>
      <Hover className='flex align-center justify-center'>
        <img src="assets/icons/icon-view.svg" alt="" />
      </Hover>
      <Img src={`assets/${image}`} alt="" />
    </Container>
  )
}

Image.propTypes = {
  image: PropTypes.string.isRequired
}

export default Image
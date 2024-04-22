import PropTypes from 'prop-types'
import styled from 'styled-components'

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border: 1px solid var(--color-white);
  border-radius: 50%;
`

const Footer = ({ firstName, lastName, avatar }) => {
  return (
    <footer className='flex align-center gap-3'>
      <Avatar src={`assets/avatar/${avatar}`} alt="" />
      <p className='secondary'>
        Creation of <span className='white hover'>{firstName} {lastName}</span>
      </p>
    </footer>
  )
}

Footer.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

export default Footer
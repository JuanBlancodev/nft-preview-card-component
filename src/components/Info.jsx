import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.section`
  height: 100px;
`

const P = styled.p`
  letter-spacing: -0.5px;
`

const Img = styled.img`
  height: 25px;
`

const Info = ({ description, value, daysLeft }) => {
  return (
    <Section className='flex flex-column'>
      <P className='secondary fw-normal flex-1'>{ description }</P>

      <div className='flex justify-between'>
        <span className='flex align-center gap-1'>
          <Img src="assets/icons/icon-ethereum.svg" alt="" />
          <h3 className='primary'>{ value }</h3>
        </span>
        <span className='flex align-center gap-1'>
          <Img src="assets/icons/icon-clock.svg" alt="" />
          <h4 className='secondary fw-semibold'>{ daysLeft }</h4>
        </span>
      </div>
    </Section>
  )
}

Info.propTypes = {
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  daysLeft: PropTypes.string.isRequired
}

export default Info
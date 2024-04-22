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
        <div className='flex align-center gap-1'>
          <Img src="assets/icons/icon-ethereum.svg" alt="" />
          <h2 className='primary fs-medium'>{ value }</h2>
        </div>
        <div className='flex align-center gap-1'>
          <Img src="assets/icons/icon-clock.svg" alt="" />
          <h3 className='secondary fw-semibold fs-small'>{ daysLeft }</h3>
        </div>
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
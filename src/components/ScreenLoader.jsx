import ReactLoading from 'react-loading'
import styled from 'styled-components'

const Content = styled(ReactLoading)`
  margin: 100px auto 20px auto;
`

const ScreenLoader = () => {
  return (
    <section>
      <Content 
        type="spin"
        color="#fff"
        width="45px"
        height="45px"
      />

      <p className='fs-large text-center'>Loading, please wait</p>
    </section>
  )
}

export default ScreenLoader
import styled from 'styled-components'

const Teste = styled.div`
  background: blue;
  height: 30px;
  width: 30px;
`

export default function Root(props) {
  return (
    <>
      <section>
        {props.name} Essa bagaceira velha funciona com styled components
      </section>
      <Teste />
    </>
  )
}

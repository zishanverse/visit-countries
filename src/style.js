import styled from 'styled-components'

export const Main = styled.div`
  background-color: #161624;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
  height: 100vh;
`
export const Head = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
`
export const ListCard = styled.ul`
  padding: 0px;
  height: 40vh;
  list-style-type: none;
  overflow-y: scroll;
  border-radius: 10px;
  border: 1px solid #94a3b8;
`
export const Item = styled.li`
  background-color: #334155;
  padding: 10px;
  margin: 0px;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #94a3b8;
`
export const Para = styled.p`
  color: ${props => (props.visited ? '#cbd5e1' : '#f1f5f9')};
  font-size: ${props => (props.novisit ? '20px;' : null)};
  margin-right: ${props => (props.visited ? '20px;' : null)};
  font-family: 'Roboto';
`
export const Btn = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  border: 0px;
  border-radius: 6px;
  height: 30px;
  width: 90px;
`
export const VisitedList = styled.div`
  display: flex;
  justify-content: ${props => (props.novisit ? 'center' : null)};
  align-items: ${props => (props.novisit ? 'center' : null)};
  flex-wrap: wrap;
`
export const ListItem = styled.li`
  width: 20%;
  margin-right: 20px;
`
export const Img = styled.img`
  width: 100%;
`
export const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

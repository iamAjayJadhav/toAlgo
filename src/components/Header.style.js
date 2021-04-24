import styled from "styled-components"

export const Buttons = styled.p`
  color: #fff;
  cursor: ${(props) => (props.disabled ? "cursor" : "pointer")};
  font-size: 15px;
  text-align: center;
  line-height: 20px;
  font-family: Arial, Helvetica, sans-serif;

  &: hover {
    color: #000;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  height: 50px;
  width: 100%;

  justify-content: space-evenly;
  background-color: #264653;
  padding-left: 15px;
  padding-right: 15px;
`

export const SortWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  align-content: center;
  justify-content: space-evenly;
`
export const RangeWrapper = styled.div`
  width: 200px;
  align-content: center;
  justify-content: space-evenly;
`

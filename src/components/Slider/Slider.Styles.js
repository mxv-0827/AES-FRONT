import styled from 'styled-components'

export const Slider_Stylizied = styled.section`
  background-image: url(${({ image }) => image});
  color: var(--text-white);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  min-height: 550px;
  padding: 150px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: background-image 1s ease-in-out;
`

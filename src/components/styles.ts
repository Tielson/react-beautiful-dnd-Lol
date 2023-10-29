import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  padding: 8px;
  min-height: 40px;
  user-select: none;
  color: rgb(255 255 255);
  display: flex;
  gap: 1rem;
  width: 340px;

  img {
    width: 100px;
    height: 100px;
    border: 1px solid #fff;
    border-radius: 50%;
    object-fit: cover;
  }

  p {
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }

  h3 {
    font-size: 1.3rem;
    font-style: Italic;
    font-weight: 400;
    line-height: 160%; /* 2.4rem */
    letter-spacing: -0.02938rem;
  }

  .titleName {
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      display: flex;
      gap: 0.7rem;
    }
  }
`

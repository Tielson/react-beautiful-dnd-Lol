import { styled } from 'styled-components'

export const Container = styled.div`
  .input {
    margin: auto 0 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    input {
      width: 400px;
      height: 25px;
      background: none;
      border: 1px solid #767676;
      border-radius: 5px;
      color: white;
      padding: 15px;
    }
  }

  .box {
    display: flex;

    .list {
      display: flex;
      flex-wrap: wrap;
      overflow-y: auto;
      justify-content: center;
      gap: 1rem;
      list-style: none;
      height: 80vh;
    }

    .selected {
      display: flex;
      gap: 1rem;
      min-width: 360px;
      align-items: flex-start;
      flex-direction: column;
      border-right: 1px solid #fffefe;

      gap: 1rem;

      li {
        list-style: none;
        box-shadow: none;
        box-sizing: border-box;
        min-height: 40px;
        margin-bottom: 8px;
        display: flex;
        gap: 1rem;
        min-width: 340px;
      }
    }
  }
`

import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 32px);
  padding: 16px;

  .center-header {
    width: 1110px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;

    .header-left {
      display: flex;
      align-items: center;

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        svg {
          color: #fff;
          transition: all 0.2s;
        }
        &:hover {
          svg {
            transform: scale(1.3);
          }
        }
      }

      .logo {
        margin-left: 8px;
      }
    }

    .header-right {
      display: flex;
      align-items: center;

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        svg {
          color: rgba(255, 255, 255, 0.5);
          transition: all 0.2s;
        }
        :hover {
          svg {
            transform: scale(1.3);
            color: #fff;
          }
        }
      }

      .search {
        margin-left: 8px;

        input {
          background: transparent;
          padding: 8px;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.5);
          border-radius: 4px;
          width: 0px;
          transition: all 0.3s;
        }
      }

      &:hover {
        .search {
          input {
            width: 320px;
            padding: 8px;
            background-color: rgba(255, 255, 255, 0.2);
          }
        }
      }
    }
  }
`;

import styled from "styled-components";

export const ContainerDestaques = styled.div`
  .primary {
    display: block;
    a {
      display: block;
      time {
        font-size: 0.7rem;
        color: #fff;
        margin-bottom: 6px;
        display: block;
        transition: color 0.2s;
      }
      h3 {
        font-size: 3rem;
        margin-bottom: 6px;
        display: block;
        color: #fff;
        transition: color 0.2s;
        line-height: 4rem;
      }
      p {
        font-size: 0.8rem;
        display: block;
        color: #fff;
        line-height: 1.4rem;
        transition: color 0.2s;
      }
      &:hover {
        time,
        h3,
        p {
          color: #ed0678;
        }
      }
    }
  }

  .secondary {
    position: relative;
    display: block;
    a {
      .text {
        display: block;
        position: absolute;
        bottom: 0;
        background: rgb(0, 0, 0);
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        padding: 0.5rem;
        time {
          font-size: 0.7rem;
          color: #fff;
          margin-bottom: 8px;
          display: block;
          transition: color 0.2s;
        }
        h3 {
          font-size: 1rem;
          margin-bottom: 8px;
          display: block;
          color: #fff;
          transition: color 0.2s;
          line-height: 1.3rem;
        }
      }

      img {
        transition: all 1s;
      }
      &:hover {
        time,
        h3,
        p {
          color: #ed0678;
        }
        img {
          transform: scale(1.2);
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .primary {
      a {
        h3 {
          font-size: 1.7rem;
          line-height: 2.2rem;
        }
      }
    }
  }
`;
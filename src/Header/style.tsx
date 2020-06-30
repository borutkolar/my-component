import styled from "styled-components";
import { white } from "../colors";

interface ContainerProps {
  backgroundColor: string;
}

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ backgroundColor }: ContainerProps) => backgroundColor};
  z-index: 1000;
`;

interface LogoWrapperProps {
  backgroundImage?: string;
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: ${({ backgroundImage }: LogoWrapperProps) => (backgroundImage ? "10rem" : "")};
  background-image: ${({ backgroundImage }: LogoWrapperProps) => (backgroundImage ? `url(${backgroundImage})` : "")};
  background-repeat: ${({ backgroundImage }: LogoWrapperProps) => (backgroundImage ? "no-repeat" : "")};
  background-position: ${({ backgroundImage }: LogoWrapperProps) => (backgroundImage ? "center center" : "")};
  padding: 1rem 1.35rem 0;

  > a {
    height: 2.5rem;

    img {
      height: 100%;
    }
  }

  > img {
    height: 1.8rem;
  }
`;

const AdditionalText = styled.div`
  padding: 0 1.35rem;
  max-height: 2.65rem;
  overflow: hidden;
  transition: max-height 0.2s linear;

  &.expanded {
    max-height: 9.7rem;
    margin-bottom: 0.5rem;
  }

  > div {
    position: relative;
    text-align: center;

    span {
      display: block;
      max-width: calc(100% - 2.4rem);
      line-height: 2.65rem;
      margin: 0 auto;
      color: ${white};
      font-size: 1.45rem;
      font-style: italic;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    svg {
      position: absolute;
      top: 50%;
      right: 0;
      color: ${white};
      transform: translateY(-50%);
      font-size: 1.2rem;
    }
  }

  > p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    color: ${white};
    font-size: 1rem;
    font-weight: 300;
  }
`;

export { Container, LogoWrapper, AdditionalText };

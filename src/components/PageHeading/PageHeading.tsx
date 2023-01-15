import styled from "styled-components";

type Props = {
  heading: string;
};

const PageHeading = ({ heading }: Props) => {
  return <HeadingMain>{heading}</HeadingMain>;
};

export default PageHeading;

const HeadingMain = styled.h1`
  font-size: 2rem;
  margin: 2rem 0 0 17rem;
`;

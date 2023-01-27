import styled from "styled-components/macro";

const QuoteConent = styled.blockquote`
  margin: 0;
  padding: 16px;
  background: hsl(0deg 0% 90%);
  border-radius: 8px;
  &::before {
    content: "“";
  }
  &::after {
    content: "”";
  }
`;
const Author = styled.cite`
  display: block;
  text-align: right;
  margin-top: 8px;
`;
const Link = styled.a`
  text-decoration: none;
  color: hsl(0deg 0% 35%);
  &::before {
    content: "—";
  }
`;

const Quote = ({ children, by, source }) => {
  return (
    <figure>
      <QuoteConent>{children}</QuoteConent>
      <figcaption>
        <Author>
          <Link href={source}>{by}</Link>
        </Author>
      </figcaption>
    </figure>
  );
};

export default Quote;

/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, Link, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import styled from "styled-components";
import { rhythm } from "../utils/typography";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            github
            linkedIn
            instagram
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <>
      <div
        style={{
          display: `flex`,
          alignItems: `center`
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`
          }}
          imgStyle={{
            borderRadius: `50%`
          }}
        />
        <Text>
          Written by <strong>{author}</strong> who lives and works in Portland.
        </Text>
      </div>
      <LinkContainer>
        <StyledLink href={`https://www.linkedin.com/in/${social.linkedIn}`}>
          <FaLinkedinIn />
        </StyledLink>
        <StyledLink href={`https://www.github.com/${social.github}`}>
          <FaGithub />
        </StyledLink>
        {/* <StyledLink href={`https://www.instagram.com/${wondertwinharmony}`}>
          <FaInstagram />
        </StyledLink> */}
        <StyledGatsbyLink to={`/reading-list`}>
          <GiBookshelf />
        </StyledGatsbyLink>
      </LinkContainer>
    </>
  );
};

const Text = styled.p`
  margin: 0;
  padding: 0;
`;

const LinkContainer = styled.div`
  padding-left: 50px;
`;

const StyledGatsbyLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  font-size: 24px;
  color: #e00e7f;
  margin: 0 1rem;
`;

const StyledLink = styled.a`
  box-shadow: none;
  text-decoration: none;
  font-size: 24px;
  color: #e00e7f;
  margin: 0 1rem;
`;

export default Bio;

import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

class ReadingList extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const books = data.site.siteMetadata.books;
    const finishedBooks = data.site.siteMetadata.finishedBooks;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Reading list" />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0
              }}
            >
              Reading List
            </h1>
          </header>
          <section>
            <Text>What I'm currently reading.</Text>
            <BookList>
              {books.map(book => (
                <li>
                  <BookLink href={book.sellerUrl}>
                    <img src={book.imgUrl} alt="book.title" height="200" />
                  </BookLink>
                </li>
              ))}
            </BookList>
          </section>
          <section>
            <Text>
              What I've completed reading by year with a succinct emoji-only
              review.
            </Text>
            {finishedBooks.map(booksByYear => (
              <>
                <YearText>{booksByYear.year}</YearText>
                <ol>
                  {booksByYear.books.map(book => (
                    <li>
                      <FinishedBookLink href={book.sellerUrl}>
                        {`${book.title}, ${book.author} - ${book.review}`}
                      </FinishedBookLink>
                    </li>
                  ))}
                </ol>
              </>
            ))}
          </section>
          <hr
            style={{
              marginBottom: rhythm(1)
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>
      </Layout>
    );
  }
}

const Text = styled.p`
  margin: 0;
  padding: 0;
`;

const BookList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const BookLink = styled.a`
  box-shadow: none;
  text-decoration: none;
`;

const YearText = styled.h3`
  margin: 0;
  padding: 0;
  margin-block-end: 0;
  margin-block-start: 0.5rem;
  text-decoration: underline;
`;

const FinishedBookLink = styled.a`
  color: #e00e7f;
`;

export default ReadingList;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        books {
          title
          author
          imgUrl
          sellerUrl
        }
        finishedBooks {
          year
          books {
            title
            author
            imgUrl
            sellerUrl
            review
          }
        }
      }
    }
  }
`;

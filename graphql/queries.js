import { gql } from "@apollo/client";

const GET_ALL_SLUGS = gql`
  query {
    newsGuides {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`;

const GET_ALL_NEWS = gql`
  query {
    newsGuides {
      data {
        attributes {
          Title
          Status
          Content
          ContentTwo
          ContentThree
          urlSlug
          Image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GET_INDIVIDUAL_NEWS = gql`
  query ($slugUrl: String!) {
    newsGuides(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          Title
          Status
          Content
          ContentTwo
          ContentThree
          urlSlug
          Image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_ALL_NEWS, GET_ALL_SLUGS, GET_INDIVIDUAL_NEWS };

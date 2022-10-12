import { ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";
import { NewsCard2 } from "../../components/NewsCard2";
import { GET_ALL_SLUGS, GET_INDIVIDUAL_NEWS } from "../../graphql/queries";
import MainLayout from "../../layout/MainLayout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const client = new ApolloClient({
  uri: `${process.env.NEXT_STRAPI_URL}/graphql`,
  cache: new InMemoryCache(),
});

const NewsletterPage = ({ post }) => {
  return (
    <MainLayout>
      <div>
        <section className="sm:py-10 sm:px-20 py-10 px-10 w-full sm:h-[551px] h-[275px] bg-backgroundDark flex flex-col justify-center items-start text-white">
          <div className="text-left">
            <h3 className="uppercase text-sm mb-5 text-textLightGreen font-semibold">
              press release
            </h3>
            <h2 className="text-3xl font-merriweather font-bold pb-6">
              {post?.title}
            </h2>
            <p></p>
          </div>
        </section>
        <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center text-black">
          <div className="text-left">
            <h2 className="text-3xl font-merriweather font-bold pb-6">
              {post?.title}
            </h2>
            <p className="text-left">
              <MDXRemote {...post?.paragraph_one} />
            </p>
          </div>
        </section>
        <section className="sm:py-12 sm:px-[140px] px-[30px] items-center justify-center w-full bg-white flex flex-col">
          <div
            className="sm:w-[1155px] sm:h-[372px] w-full h-[50vw] bg-noContent rounded-2xl "
            style={{
              background: `url(${post?.image_one})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </section>
        <section className="sm:py-10 sm:px-[140px] py-10 px-[30px] w-full bg-white flex flex-col items-center justify-center text-black">
          <p className="text-left mb-10">
            <MDXRemote {...post?.paragraph_two} />
          </p>
          <section className="items-start justify-start w-full pb-6 bg-white flex flex-col">
            <div
              className="sm:w-[355px] sm:h-[472px] w-full h-[50vw] bg-noContent rounded-2xl"
              style={{
                background: `url(${post?.image_two})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </section>
          <p>
            <MDXRemote {...post?.paragraph_three} />
          </p>
        </section>
        <section className="sm:py-10 sm:px-[140px] pb-10 py-10 px-[30px] w-full bg-white flex flex-col items-center">
          <div className="text-center mb-10">
            <h3 className="uppercase text-sm mb-5 text-textPrimary font-semibold">
              RELATED NEWS ARTICLES
            </h3>
            <h2 className="text-3xl font-merriweather font-bold pb-6">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit.
            </h2>
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10">
            <NewsCard2
              date="22 August 2022"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              length="5"
            />
            <NewsCard2
              date="22 August 2022"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              length="5"
            />
            <NewsCard2
              date="22 August 2022"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              length="5"
            />
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default NewsletterPage;

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_SLUGS });

  const paths = data.newsGuides.data.map((post) => {
    return { params: { slug: post?.attributes?.urlSlug } };
  });

  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_INDIVIDUAL_NEWS,
    variables: { slugUrl: params.slug },
  });

  const attrs = data.newsGuides.data[0].attributes;

  const html_one = await serialize(attrs?.Content);

  const html_two = await serialize(attrs?.ContentTwo);

  const html_three = await serialize(attrs?.ContentThree);

  const img = data?.newsGuides?.data[0]?.attributes;
  return {
    props: {
      post: {
        title: attrs?.Title,
        paragraph_one: html_one,
        paragraph_two: html_two,
        paragraph_three: html_three,
        image_one: img?.Image?.data[0]?.attributes?.url,
        image_two: img?.Image?.data[1]?.attributes?.url,
      },
    },
  };
}

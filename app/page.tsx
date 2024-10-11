import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
import { Metadata } from "next";
import { Fragment, Suspense } from "react";

export const metadata : Metadata = {
  title: "Home - Latest Posts",
  description:
    "Welcome back! Here's what you might've missed. Stay updated with the latest posts.",
};
async function LatestPost() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

export default async function Home() {
  return (
    <Fragment>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPost />
        </Suspense>
      </section>
    </Fragment>
  );
}

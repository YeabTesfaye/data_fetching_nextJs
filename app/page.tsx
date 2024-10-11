import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
import { Fragment, Suspense } from "react";

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

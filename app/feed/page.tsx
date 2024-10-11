import { Metadata } from "next";
import { Fragment } from "react";
import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";


export async function generateMetadata(): Promise<Metadata> {
  const posts = await getPosts();
  const title = `Feed - ${posts.length} ${
    posts.length === 1 ? "Post" : "Posts"
  }`;
  const description = posts.length
    ? `Explore ${posts.length} post${
        posts.length === 1 ? "" : "s"
      } created by users. Stay connected and engage with the community.`
    : "No posts available. Share your thoughts with the community.";
  return {
    title,
    description,
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <Fragment>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </Fragment>
  );
}

import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
import { Fragment } from "react";



export default async function FeedPage() {
    const posts = await getPosts();
    return (
        <Fragment>
            <h1>All posts by all users</h1>
            <Posts posts={posts}  />
        </Fragment>
    )
}
import { Metadata } from "next";
import PostForm from "@/components/post-form";
import { createPost } from "@/actions/posts";
export const metadata : Metadata = {
  title: "Create a New Post",
  description: "Share your thoughts with the community by creating a new post.",
}
export default function NewPostPage() {
  return <PostForm action={createPost} />;
}

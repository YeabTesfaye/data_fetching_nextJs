"use server";
import { uploadImage } from "@/lib/cloudinary";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

type FormState = {
  errors: [];
};
export async function createPost(prevState: FormState, formData: FormData) {
  const title = formData.get("title") as string;
  const image = formData.get("image") as File | null;
  const content = formData.get("content") as string;
  let errors = [];
  if (!title || title.trim().length == 0) {
    errors.push("Title is required");
  }
  if (!content || content.trim().length == 0) {
    errors.push("content is required");
  }
  if (!image || image.size === 0) {
    errors.push("image is required");
  }
  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error("");
  } 
  if (errors.length > 0) return { errors };
  await storePost({
    imageUrl,
    title,
    content,
    userId: 1,
  });
  redirect("/feed");
}

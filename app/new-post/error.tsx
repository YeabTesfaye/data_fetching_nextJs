'use client';
interface Props{
    error : {
        message : string
    }
}
export default function NewPostError({ error } : Props) {
  return (
    <>
      <h2>An error occurred!</h2>
      <p>Unfortunately, something went wrong.</p>
      <p>{error.message}</p>
    </>
  );
}

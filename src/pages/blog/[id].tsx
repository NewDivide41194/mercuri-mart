import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();

  // Ensure it's available
  if (!router.isReady) {
    return <p>Loading...</p>;
  }

  const { id } = router.query;

  return <h1>Blog Post ID: {id}</h1>;
}

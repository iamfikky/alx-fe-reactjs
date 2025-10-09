import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold">Blog Post #{id}</h1>
      <p>This page was loaded dynamically using the route parameter.</p>
    </div>
  );
}

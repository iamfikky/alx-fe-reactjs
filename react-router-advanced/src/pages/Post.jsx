import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Post ID: {id}</h2>
      <p>This page displays the content for post #{id}.</p>
    </div>
  );
}

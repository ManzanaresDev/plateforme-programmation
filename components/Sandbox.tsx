export default function Sandbox({ url }: { url: string }) {
  if (!url) return null;

  return (
    <div className="sandbox sandbox-fullscreen">
      <iframe src={url} allow="fullscreen" />
    </div>
  );
}

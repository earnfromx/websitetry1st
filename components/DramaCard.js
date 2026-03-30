import Link from "next/link";

export default function DramaCard({ drama }) {
  return (
    <div className="card">
      <img src={drama.image} />
      <h3>{drama.title}</h3>
      <Link href={`/drama/${drama.slug}`}>Watch Now</Link>
    </div>
  );
}
import dramas from "../../data/dramas";

export default function Page({ drama }) {
  return (
    <div className="container">
      <h1>{drama.title}</h1>
      <img src={drama.image} />
      <p>{drama.description}</p>

      <iframe
        width="100%"
        height="400"
        src={drama.video}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: dramas.map(d => ({ params: { slug: d.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const drama = dramas.find(d => d.slug === params.slug);
  return { props: { drama } };
}

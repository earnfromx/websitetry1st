import dramas from "../../data/dramas";

export default function Page({ drama }) {
  return (
    <div className="container">
      <h1>{drama.title}</h1>
      <img src={drama.image} />
      <p>{drama.description}</p>

     <div id="video1" style="margin:auto; max-width:800px; position:relative;">
  <img class="video-cover" 
       src="/wp-content/uploads/2026/01/1.webp" 
       style="width:100%; cursor:pointer; border-radius:8px;">

  <div class="player-wrapper" style="display:none; position:relative;">
    <div style="position:relative; padding-top:65%; height:0; overflow:hidden; border-radius:8px;">
      <div id="video1-player" style="position:absolute; top:0; left:0; width:100%; height:100%;"></div>
    </div>

    <div class="subtitle-box" style="background:rgba(0,0,0,0.7); border-radius:6px; bottom:1px; color:white; font-family:Tahoma; font-size:16px; left:50%; max-width:90%; padding:8px 12px; position:absolute; text-align:center; transform:translateX(-50%); z-index:10;">
      📝 الترجمة ستظهر هنا...
    </div>
  </div>
</div>

<!-- ✅ FIXED SCRIPT -->
<script
  dangerouslySetInnerHTML={{
    __html: `
      initCustomPlayer(
        "video1",
        "${drama.video}",
        \`${drama.subtitle}\`
      );
    `
  }}
/>
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

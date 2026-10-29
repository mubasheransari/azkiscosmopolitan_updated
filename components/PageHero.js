export default function PageHero({ kicker, title, lead, image }) {
  return (
    <section className="page-hero" style={image ? { "--img": `url(${image})` } : undefined}>
      <div className="wrap">
        {kicker && <p className="kicker">{kicker}</p>}
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}

// Photo block. `src` can be one path or a list of paths: CSS paints them as stacked backgrounds, so the first
// image that exists is shown and the next ones are fallbacks (e.g. [real photo .jpg, illustrated .svg]).
// If none exist, the navy placeholder + icon stays visible, so the layout never breaks.
import Icon from "./Icon";
export default function Photo({ src, icon = "buildings", className = "", children, style }) {
  const list = (Array.isArray(src) ? src : [src]).filter(Boolean);
  return (
    <div className={"photo " + className} style={style}>
      <span className="photo-fallback"><Icon name={icon} size={46} sw={1.2} /></span>
      {list.length > 0 && <span className="photo-img" style={{ backgroundImage: list.map((s) => `url(${s})`).join(", ") }} />}
      {children}
    </div>
  );
}

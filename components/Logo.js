// Official AZKIS Cosmopolitan globe logo + wordmark text.
// `light` switches to the white logo and light text for dark backgrounds (footer).
export default function Logo({ light = false, size = 74, text = true }) {
  return (
    <span className={"logo" + (light ? " light" : "")}>
      <img
        src={light ? "/logo-white.png" : "/logo.png"}
        alt={text ? "" : "AZKIS Cosmopolitan"}
        height={size}
        style={{ height: size, width: "auto" }}
      />
      {text && (
        <span className="logo-text">
          <b>AZKIS COSMOPOLITAN</b>
          <small>POWER · DATA · VOICE · TURNKEY PROJECTS</small>
        </span>
      )}
    </span>
  );
}
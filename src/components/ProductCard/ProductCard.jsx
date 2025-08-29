import "./ProductCard.css";

export default function ProductCard({ title, details }) {
  return (
    <article className="product-card card">
      <div className="pc-body">
        <h3>{title}</h3>
        <p className="subtle">{details}</p>
      </div>
    </article>
  );
}

import "./TestimonialCard.css";

export default function TestimonialCard({ quote, author }) {
  return (
    <blockquote className="testimonial card">
      <p>“{quote}”</p>
      <footer>— {author}</footer>
    </blockquote>
  );
}

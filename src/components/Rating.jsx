import Star from "../assets/star.svg";

export default function Rating({ rating }) {
  const starts = Array(rating).fill(Star);
  return starts.map((star, i) => (
    <img key={i} src={star} width="14" height="14" />
  ));
}

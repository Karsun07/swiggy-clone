export default function Mindcard({ value }) {
  return (
    <a href={value?.action?.link}>
      <img
        className="w-32 h-40 object-cover"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.imageId}
        alt="card"
      />
    </a>
  );
}
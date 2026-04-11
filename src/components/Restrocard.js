export default function Restrocard({ value }) {
  return (
    <div className="max-w-sm flex-none relative">
      
      <a href={value?.cta?.link}>
        <img className="w-80 h-48 object-cover rounded-t-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.info?.mediaFiles?.[0]?.url} alt={value?.info?.name}/>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent rounded-t-2xl"></div>
        <p className="absolute bottom-3 left-2 text-lg font-bold text-white z-10">{value?.info?.name}</p>
        <p className="absolute bottom-3 right-2 text-lg font-semibold text-white z-10">{value?.info?.rating?.value}</p>
      </a>
       
    </div>
  );
}
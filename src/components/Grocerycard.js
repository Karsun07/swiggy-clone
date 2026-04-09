export default function Grocerycard({value}){
    return (
        <div className="text-center">
            <a href={value?.action?.link}><img className="w-36 h-45" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value.imageId}></img></a>
            <label className="w-36 h-12 object-cover font-medium  ">{value?.action?.text}</label>
        </div>
    )
}
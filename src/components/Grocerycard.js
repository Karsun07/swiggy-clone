export default function Grocerycard({value}){
    return (
        <div className="text-center">
            <a href={value?.action?.link}><img className="w-40 aspect-square object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value.imageId}></img></a>
            <label className="block w-40 text-center font-medium ">{value?.action?.text}</label>
        </div>
    )
}
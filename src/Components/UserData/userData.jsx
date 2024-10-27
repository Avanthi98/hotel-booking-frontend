function UserTag(props){
    return(
        <div className="h-full bg-[#a754df] flex absolute right-0 items-center p-[10px] cursor-pointer">
            <img src={props.imageLink} className="w-[52px] h-[52px] rounded-full"></img>
            <p className="text-white text-xl ml-[10px]">{props.name}</p>
        </div>
    )
}
export default UserTag;
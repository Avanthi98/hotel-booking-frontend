import UserTag from "../UserData/userData.jsx";
function Header(){
    return (
        <header className="bg-[#732fa0]  w-full flex h-[80px] relative items-center p-[20px]"  style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
           <h1 className="text-white font-bold text-4xl">LeoNine Villa</h1>
           
            <UserTag imageLink="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg" name="Isith Hansaka"></UserTag>
           
        </header>
    )
}

export default Header;
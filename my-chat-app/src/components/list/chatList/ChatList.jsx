import "./chatList.css"
const ChatList = () => {
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt=""/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
        </div>
    )
}
export default ChatList
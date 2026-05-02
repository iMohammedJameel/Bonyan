function Sidebar(){
    const links =[
        { icon: "fa-chart-column",title:"Status" },
        { icon: "fa-users",title:"User Mangement" },
        { icon: "fa-building",title:"Projects Mangement" },
        { icon: "fa-building",title:"Developers Mangement" },
        { icon: "fa-globe",title:"CMS" },
        { icon: "fa-message",title:"live Chats" }
    ];
    return(
       <aside>
        <div className="title">Dashboard</div>
        <nav>
            {links.map((item, index) => (
               <div className="navItem" key={index}>
                <i className={`fa-solid ${item.icon}`}></i>
                <span>{item.title}</span>
              </div>
            ))}
        </nav>
       </aside>
    );
}
export default Sidebar;
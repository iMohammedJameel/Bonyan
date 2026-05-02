import styles from "./Sidebar.module.css"
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
       <aside className={`${styles.sidebar} min-vh-100 py-4`}>
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
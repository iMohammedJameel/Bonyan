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
        <div className="fw-semibold mb-4 px-3 fs-4">Dashboard</div>
        <nav>
            {links.map((item, index) => (
               <div className={`${styles.navItem} d-flex align-items-center  gap-2 px-3 py-3 navItem `} key={index}>
                <i className={`fa-solid ${item.icon} fs-3`}></i>
                <span className={styles.title}>{item.title}</span>
              </div>
            ))}
        </nav>
       </aside>
    );
}
export default Sidebar;
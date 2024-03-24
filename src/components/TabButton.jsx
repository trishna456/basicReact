export default function TabButton({children, current, ...props}){
    let name='';
    if(children.toLowerCase()===current){
        name='active'
    }
    return (
        <li>
            <button className={name} {...props}>{children}</button>
        </li>
    )
}
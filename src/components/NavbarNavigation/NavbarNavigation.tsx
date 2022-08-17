interface NavbarNavigationProps {
    items: Array<any>,
};

const NavbarNavigation = (props: NavbarNavigationProps) => {
    return (
        <ul className="flex gap-[15px]">
            {props.items.map((item: any, index: number) => {
                return (
                    <li key={index}>{item.title}</li>
                );
            })}
        </ul>
    );
};

export default NavbarNavigation;
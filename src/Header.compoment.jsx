const Header = (props) => {
    return (
        <header>
            <h2>Hello from the header component</h2>
            <h2>Hello my name is {props.myName}</h2>
            <h2>Child name {props.children} </h2>
            <button onClick={props.methodOnApp}>Change child Name</button>
        </header>
    );
}

 
export default Header;

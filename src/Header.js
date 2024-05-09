import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand, NavbarToggler,UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {useState} from 'react';

const Header =() =>{

    const [isOpen, setIsOpen] = useState(false);

    const divStyle ={
        backgroundColor: '#ebe3b7',
        width: '100%',
        position: 'fixed',
        left: '0px',
        top: '0px',
        zIndex: 10

    };    // 따로 css 를 분리해서 써도 좋지만 한 곳에다가 쓰면 여기에 설정해도 됨

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Navbar color='light' light expand="md">
            <NavbarBrand><i><b>코스타 은행</b></i></NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            
            <Nav className='ml-auto' navbar>
                <NavItem>
                    <NavLink href='/'>로그인</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/join'>회원가입</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle tag="a" className='"nav-link' caret>계좌</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem tag="a" href='/makeAccount'>계좌개설</DropdownItem>
                        <DropdownItem tag="a" href='/deposit'>입금</DropdownItem>
                        <DropdownItem tag="a" href='/withdraw'>출금</DropdownItem>
                        <DropdownItem tag="a" href='/accountInfo'>계좌조회</DropdownItem>
                        <DropdownItem tag="a" href='/allAccountInfo'>전체계좌조회</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            
        </Navbar>
        // <div style={divStyle}>
        //     <ul className="nav-itmes">
        //             <li className="nav-item"><i><b>코스타 은행</b></i></li>
        //             <li className="nav-item"><Link to="/makeAccount">계좌 개설</Link></li>
        //             <li className="nav-item"><Link to="/deposit">입금</Link></li>
        //             <li className="nav-item"><Link to="/withdraw">출금</Link></li>
        //             <li className="nav-item"><Link to="/accountInfo">계좌 조회</Link></li>
        //             <li className="nav-item"><Link to="/allAccountInfo">전체 계좌 조회</Link></li>
        //             <li className="nav-item"><Link to="/">로그인</Link></li>
        //             <li className="nav-item"><Link to="/join">회원가입</Link></li>
        //     </ul>
        // </div>
    )
}

export default Header;
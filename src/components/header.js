import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [status, setStatus] = useState(false);
    return (
        <Container>
          <a>
            <img src="/images/logo.svg" />
          </a>
          <Menu>
            <a href="#">Model S</a>
            <a href="#">Model 3</a>
            <a href="#">Model X</a>
            <a href="#">Model Y</a>
          </Menu>
          <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu onClick={()=> setStatus(true)}/>
          </RightMenu>

          <BurgerNav show={status}>
            <CloseButtonWrapper>
              <CustomClose onClick={()=>setStatus(false)}/>
            </CloseButtonWrapper>
            <li><a href="#">Exiting Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Test Drive</a></li>
            <li><a href="#">Insurance</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Charging</a></li>
          </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`

  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`

  display: flex;
  flex: 1;
  justify-content: center;
  margin-left: 105px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding-top: 0px;
    margin-left: 12px;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
  @media(max-width: 768px){
    display: none;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;

  li{
    padding-top: 15px;
    padding-bottom: 15px;
    paddin-left: 0px;
    paddin-right: 0px;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  }

  a {
    font-weight: 600;
  }
  z-index: 10;
`
const CloseButtonWrapper = styled.div`

  display: flex;
  justify-content: end;

`
const CustomClose = styled(CloseIcon)`

  cursor: pointer;

`

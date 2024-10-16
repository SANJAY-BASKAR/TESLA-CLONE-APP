import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Close } from '@mui/icons-material';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';



function Header() {
  const [ burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)



  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo"></img>
      </a>
      <Menu>
        { cars && cars.map((car, index)=> (
          <a href="#" key={index}>{car}</a>
        ))}
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla_Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus} >
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)}></CustomClose>
        </CloseWrapper>
        { cars && cars.map((car, index)=> (
          <li><a href="#" key={index}>{car}</a></li>
        ))}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade In</a></li>
        <li><a href="#">CyberTruck</a></li>
        <li><a href="#">Roadster</a></li>
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
  padding: 0 20px;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 550;
    text-transform: uppercase;
    padding:0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px){
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 550;
    text-transform: uppercase;
    margin-right: 10px;
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
  background: aliceblue;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? `translateX(0)`: `translateX(100%)`};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a{
      font-weight: 600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`
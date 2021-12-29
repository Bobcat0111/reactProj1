import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import{ HeaderWrapper, Logo, Nav,NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo} from './style';
import SearchIcon from '@material-ui/icons/Search';
import { actionCreators } from "./store";

const Header = (props) =>{
    return (
        <HeaderWrapper>
            <Logo />
            <Nav >
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>Aa</NavItem>
                <SearchWrapper>
                <CSSTransition
                in={props.focused}
                timeout={500}
                classNames='slide'
                >
                  <NavSearch 
                  className={props.focused ? 'focused':''} 
                  onFocus={props.handleInputFocus}
                  onBlur={props.handleInputBlur}
                  />
                  </CSSTransition>
                    <SearchIcon className={props.focused ? 'focused iconsvg':'iconsvg'}/>
                    <SearchInfo/>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'>写文章</Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    );
}


const mapStateToProps = (state)=>{
    return {
        focused:state.header.focused
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        handleInputFocus(){
            // const action=actionCreators.searchFocus;
            // console.log(action.prototype);
            dispatch(actionCreators.searchFocus)
        },
        handleInputBlur(){
            // const action=actionCreators.searchBlur;
            // console.log(action);
            dispatch(actionCreators.searchBlur)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
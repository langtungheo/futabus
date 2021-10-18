import { Route } from "react-router";
import FooterComponent from "../../Components/footer/FooterComponent";
import HeaderComponent from "../../Components/header/HeaderComponent";


export const HomeTemplate = (props) => {
    const {Component, ...resRoute} = props;
    return <Route {...resRoute} render={(porpsRoute)=>{
        return <div>
            <HeaderComponent />
            <Component {...porpsRoute} />
            <FooterComponent />
        </div>
    }} />
}
import React from 'react'
import * as Views from 'views'
import { Route, Switch } from "react-router-dom";
import {pascalToKebab} from 'global/utilities'
import AppliedRoute from 'components/AppliedRoute/AppliedRoute'

class Routes extends React.Component {
    changedTabHandler = (event) => {
        this.setState({current: event.key})
    }
    render() {
        let {childProps} = this.props
        let views = Object.keys(Views).map((View, i)=>{
            if (View==='Home'){
                return(<AppliedRoute exact path='/' key={i} component={Views[View]} props={childProps}/>)
            }else if(View==='NotFound'){
                return(<Route component={Views[View]} key={i}/>)
            }else{
                return(<AppliedRoute path={'/'+pascalToKebab(View)} key={i} component={Views[View]} props={childProps}/>)
            }
        })
        return (
            <Switch>
              {views}
            </Switch>
        )
    }   
}

export default Routes
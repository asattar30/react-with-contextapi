import React, {Component} from "react"

export const myContext = React.createContext()

export default class ContextAPI extends Component {

    state = {
        isLoggedin: false,
        token: "",
        expiredAt: new Date()
    }

    render() {
        const {isLoggedin, token, expiredAt} = this.state;
        return (
            <myContext.Provider value={{
                isLoggedin, 
                token, 
                expiredAt,
                login: () => {
                    this.setState({
                        isLoggedin: !isLoggedin
                    })
                }
            
            }}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}

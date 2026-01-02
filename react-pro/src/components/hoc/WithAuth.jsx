/* eslint-disable no-unused-vars */
const WithAuth = (WrappedComponent) => {
    return function AuthComponent(props){
        const loggedIn = true;

        if(!loggedIn){
            return <p>Please Login first to access this component</p>
        }

        return <WrappedComponent {...props}/>
    }
}

export default WithAuth;
import React, { Component} from 'react'

import Model from '../../Components/UI/Model/Model'
import Auxiliary from '../Auxiliary';

const WithErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props){
            super(props);
            this.state ={
                error: null
            }

            // ComponentWillMount doesn't work thats why both method called here
            // axios.interceptors.request.use(req =>{
            //     this.setState({error: null});
            //     return req;
            // })
            // axios.interceptors.response.use(res => res, error => {
            //     this.setState({error: error})
            // });
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req =>{
                this.setState({error: null});
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            });
        }

        componentWillUnmount() {
                axios.interceptors.request.eject(this.reqInterceptor);
                axios.interceptors.response.eject(this.resInterceptor)
        }
        
        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        render () {
            let model = <Model show={this.state.error}
                            modelClosed={this.errorConfirmedHandler}>
                        </Model>;

             if(this.state.error){
                 model = <Model show={this.state.error}
                            modelClosed={this.errorConfirmedHandler}>
                                {
                                    this.state.error ?
                                    this.state.error.message
                                    : null
                                }
                        </Model>
             }

            return (
                <Auxiliary>
                    {model}
                    <WrappedComponent {...this.props} />
                </Auxiliary>
            )
        }
    }
}

export default WithErrorHandler;

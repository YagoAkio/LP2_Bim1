import { Component }from "react";

export default class Contador extends Component{
    
    render(){
        return (
            <div>
                <h1 id="num">{}</h1>
                <button>
                    +
                </button>
                <button>
                    -
                </button>
            </div>
        );
    }
}
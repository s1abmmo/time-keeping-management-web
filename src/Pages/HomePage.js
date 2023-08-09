import { Component } from "react";
import { TopBar } from "../Components/TopBar";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return <>
            <TopBar />
            <div className='bg-gray-100 h-screen w-screen'>

            </div>
        </>
    }
}
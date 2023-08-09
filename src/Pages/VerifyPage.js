import { Component } from "react";
import { TopBar } from "../Components/TopBar";

export default class VerifyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <>
            <div class="min-h-screen flex items-center justify-center">
                <div class="w-80">
                    <h2 class="text-2xl font-bold mb-4">Nhập mã xác thực</h2>
                    <div class="mb-4">
                        <label for="otp" class="block text-gray-700 text-xs pb-2 font-semibold">Nhập mã xác thực</label>
                        <input type="text" id="otp" name="otp" class="w-full border-gray-300 border rounded px-2 py-1 focus:border-green-600 hover:border-green-600 text-sm outline-none placeholder:text-gray-200" placeholder="Nhập mã 6 số xác thực" required />
                    </div>
                    <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full">Tiếp tục</button>
                </div>
            </div>        </>
    }
}
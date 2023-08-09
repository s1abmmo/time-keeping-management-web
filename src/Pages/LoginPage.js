import { Component } from "react";
import { TopBar } from "../Components/TopBar";

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <>
            <div class="min-h-screen flex items-center justify-center">
                <div class="bg-white p-8 rounded shadow-md w-80">
                    <h2 class="text-2xl mb-6 font-semibold">Login</h2>
                    <div class="mb-4">
                        <label for="username" class="block text-gray-700 text-sm pb-3 font-semibold">Số điện thoại</label>
                        <input type="text" id="username" name="username" class="w-full border-gray-300 border rounded px-2 py-1 focus:border-green-600 hover:border-green-600 text-sm outline-none placeholder:text-gray-200" placeholder="Số điện thoại"/>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block text-gray-700 text-sm pb-3 font-semibold">Mật khẩu</label>
                        <input type="password" id="password" name="password" class="w-full border-gray-300 border rounded px-2 py-1 focus:border-green-600 hover:border-green-600 text-sm outline-none placeholder:text-gray-200" placeholder="Mật khẩu"/>
                    </div>
                    <button type="submit" class="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 w-full">Đăng nhập</button>
                </div>
            </div>
        </>
    }
}
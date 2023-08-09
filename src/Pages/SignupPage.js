import { Component } from "react";
import { TopBar } from "../Components/TopBar";
import { useNavigate } from "react-router-dom";
import { navigate } from "../App";

export default function SignupPage() {
    const navigation = useNavigate();

    return <_SignupPage navigation={navigation} />;
}

class _SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signupType: 0
        };
    }

    switchSignupType = () => {
        this.setState({ signupType: this.state.signupType == 0 ? 1 : 0 });
    }


    render() {
        const { navigation } = this.props;

        function navigateToVerifyPage() {
            navigation("/verify");
        }

        if (this.state.signupType == 0) {
            return <>
                <div class="min-h-screen flex items-center justify-center">
                    <div class="w-80">
                        <h2 class="text-2xl mb-4 font-semibold">Đăng ký</h2>
                        <div class="mb-4">
                            <label for="username" class="block text-gray-700 text-sm pb-3 font-semibold">Số điện thoại</label>
                            <input type="text" id="username" name="username" class="w-full border-gray-300 border rounded px-2 py-1 focus:border-green-600 hover:border-green-600 text-sm outline-none placeholder:text-gray-200" placeholder="Số điện thoại" />
                        </div>
                        <button type="submit" class="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 w-full" onClick={navigateToVerifyPage}>Tiếp tục</button>
                        <button className="flex justify-center pt-4 text-xs" onClick={this.switchSignupType}>Đăng ký với email</button>
                    </div>
                </div>
            </>
        }

        return <>
            <div class="min-h-screen flex items-center justify-center">
                <div class="w-80 justify-center flex-col">
                    <h2 class="text-2xl mb-6 font-semibold">Đăng ký</h2>
                    <div class="pb-4">
                        <label for="username" class="block text-gray-700 text-xs pb-2 font-semibold">Email</label>
                        <input type="text" id="username" name="username" class="w-full border-gray-300 border rounded px-2 py-1 focus:border-green-600 hover:border-green-600 text-sm outline-none placeholder:text-gray-200" placeholder="Số điện thoại" />
                    </div>
                    <div class="pb-4">
                        <label for="password" class="block text-gray-700 text-xs pb-2 font-semibold">Mật khẩu</label>
                        <input type="password" id="password" name="password" class="w-full border-gray-300 border rounded px-2 py-1 focus:border-green-600 hover:border-green-600 text-sm outline-none placeholder:text-gray-200" placeholder="Mật khẩu" />
                    </div>
                    <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full" onClick={this.navigateToVerifyPage}>Tiếp tục</button>
                    <button className="flex justify-center pt-4 text-xs" onClick={this.switchSignupType}>Đăng ký với số điện thoại</button>
                </div>
            </div>
        </>

    }
}
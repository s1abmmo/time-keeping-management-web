import { useNavigate } from "react-router-dom";

export function TopBar() {

    const navigate = useNavigate();

    const onLoginClick = () => {
        navigate("/login");
    };

    const onSignupClick = () => {
        navigate("/signup");
    };

    return <div class="bg-white p-4">
        <div class="container mx-auto">
            <div class="flex items-center justify-between">
                <div class="text-green-600 font-bold text-xl">Time Keeping Management</div>
                <nav>
                    <ul class="flex space-x-4">
                        <li>
                            <div className="bg-green-100 px-4 py-2 rounded" onClick={onLoginClick}>
                                <a href="#" class="text-green-600">Login</a>
                            </div>
                        </li>

                        <li>
                            <div className="bg-green-600 px-4 py-2 rounded" onClick={onSignupClick}>
                                <a href="#" class="text-white">Free Trial</a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
}
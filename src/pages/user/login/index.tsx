import Login from "@/components/Login";
import "@/style.scss"

const LoginScreen = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-img" >
            <Login />
        </div>
    );
}

export default LoginScreen;
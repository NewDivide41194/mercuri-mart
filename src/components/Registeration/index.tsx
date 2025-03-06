import Image from 'next/image';
import '../../app/globals.css';
import Button from '../Button';
import TextInput from '../TextInput';
import Logo from "../../../public/MercuriMart.png";

export default function RegistrationForm() {
    return (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 bg-glassmorphism ">
            <Image src={Logo} alt='logo' className='w-50 mx-auto mb-4' />

            <form className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-2 group">
                    <TextInput type="text" label="Name" id="user_name" placeholder="User Name" required />
                </div>
                <div className="relative z-0 w-full mb-2 group">
                    <TextInput type="email" label="Email" id="email" placeholder="Email" required />
                </div>
                <div className="relative z-0 w-full mb-2 group">
                    <TextInput type="text" label="Phone number" id="floating_phone" placeholder="Phone number" required />
                </div>
                <div className="relative z-0 w-full mb-2 group">
                    <TextInput type="password" label="Password" id="floating_password" placeholder="Password" required />
                </div>
                <div className="relative z-0 w-full mb-2 group">
                    <TextInput type="password" label="Confirm Password" id="floating_confirm_password" placeholder="Confirm Password" required />
                </div>
                <hr className="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-100" />
                <Button text="Sign Up" />
            </form>
        </div>

    )
}
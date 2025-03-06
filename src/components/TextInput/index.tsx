interface TextInputProps {
    label: string;
    type: string;
    id: string;
    placeholder: string;
    required?: boolean;
}

export default function TextInput(props: TextInputProps) {
    const { label, type, id, placeholder, required } = props;
    return (
        <div>
            <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">{label} {required&&"*"}</label>
            <input type={type} name={id} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={placeholder} required={required} />
        </div>

    )
}
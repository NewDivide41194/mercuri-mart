import '../../app/globals.css';

interface ButtonProps {
    text: string;
    type?: 'button' | 'submit' | 'cancel';
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    return (
        <button
            type="button"
            onClick={props.onClick}
            className={"w-full outline-none font-bold rounded-lg text-sm px-5 py-2.5" +
                (props.type === 'cancel' ? ' button-secondary text-white' : ' button-primary')}>
            {props.text}
        </button>
    );
}

const FormModal = ({ children, title,isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            id="crud-modal"
            tabIndex={-1}
            aria-hidden={!isOpen}
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/50"
        >
            <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-700">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-600 border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {title}
                    </h3>
                    <button 
                        type="button" 
                        className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default FormModal;
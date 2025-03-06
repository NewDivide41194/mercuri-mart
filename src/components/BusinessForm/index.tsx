import Button from "../Button";
import TextInput from "../TextInput"

const ProductForm = ({ product, onSubmit, onClose }) => {
    return (
        <form className="">
            <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                    <TextInput label="Name" type="text" id="name" placeholder="Enter product name" required />
                </div>
                <div className="col-span-2">
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                    <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option selected>Select category</option>
                        <option value="TV">TV/Monitors</option>
                        <option value="PC">PC</option>
                        <option value="GA">Gaming/Console</option>
                        <option value="PH">Phones</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                    <textarea id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>
                </div>
                <Button text="Add Business" onClick={onSubmit} />
                <Button text="Close" type="cancel" onClick={onClose} />
            </div>

        </form>
    )

}

export default ProductForm;
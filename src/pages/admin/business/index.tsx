import Button from "@/components/Button";
import ShopCard from "@/components/Card";
import Layout from "@/components/layout";
import FormModal from "@/components/Modal";
import BusinessForm from "@/components/BusinessForm";
import { useState } from "react";

const Business = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const _handleClose = () => {
        setIsModalOpen(false);
    }

    return (
        <Layout>
            <div className="flex align-center justify-between">
                <span className="title-1">Business</span>
                <div className="w-40 my-auto">
                <Button text="Add Business" onClick={()=>setIsModalOpen(true)} />
                </div>
            </div>
            <ShopCard shopDescription="Vietnam Style Coffee" shopName="Coffee Viet" shopImage="" />
            <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={"Create New Business"}>
                <BusinessForm onClose={_handleClose}/>
                </FormModal>
        </Layout>
    );
}

export default Business;
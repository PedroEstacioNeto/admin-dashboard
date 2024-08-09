import { IoCloseSharp } from "react-icons/io5";
import { BsFillGridFill } from "react-icons/bs";
import { GoPersonFill } from "react-icons/go";
import { IoIosPaper } from "react-icons/io";
import { IoMdAnalytics } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { TbBrandProducthunt } from "react-icons/tb";
import { TbReport } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import './index.css';

export default function SideBar() {
    return (
        <aside>
            <div className="top">
                <div className="logo">
                    <img src="" alt="" />
                    <h2>AD<span className="bg-white text-red-200">MIN</span></h2>
                </div>
                <div className="close" id="close-btn">
                    <IoCloseSharp />
                </div>
            </div>
            <div className="sidebar">
                <a href="#">
                    <BsFillGridFill />
                    <h3>DashBoard</h3>
                </a>
                <a href="#">
                    <GoPersonFill />
                    <h3>Customer</h3>
                </a>
                <a href="#">
                    <IoIosPaper />
                    <h3>Orders</h3>
                </a>
                <a href="#">
                    <IoMdAnalytics />
                    <h3>Analytics</h3>
                </a>
                <a href="#">
                    <MdMessage />
                    <h3>Messages</h3>
                </a>
                <a href="#">
                    <TbBrandProducthunt />
                    <h3>Products</h3>
                </a>
                <a href="#">
                    <TbReport />
                    <h3>Reports</h3>
                </a>
                <a href="#">
                    <IoSettings />
                    <h3>Settings</h3>
                </a>
                <a href="#">
                    <FaPlusCircle />
                    <h3>Add Product</h3>
                </a>
            </div>
        </aside>
    );
}
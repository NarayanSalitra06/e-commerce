import React from "react";
import { Edit2, Trash2, ShoppingCart as CartIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProductGrid } from "../features/ProductGrid";
import Heading from "./Heading";

interface CartItem {
  id: string;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

interface ToggleBtnProps {
  buttons: string[];
  style: string;
}

const ToggleBtn: React.FC<ToggleBtnProps> = ({ buttons, style }) => {
  const [activeBtn, setActiveBtn] = React.useState(0);

  return (
    <div className={style}>
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          className={`rounded-full font-inter ${
            activeBtn === idx
              ? "bg-[#0d0d0d] text-white"
              : "bg-transparent text-[#0d0d0d]"
          }`}
          onClick={() => setActiveBtn(idx)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

const ShoppingCart = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    {
      id: "1",
      name: "Taft Arrival Jacket",
      color: "White",
      size: "S",
      price: 36,
      quantity: 1,
      image: "/api/placeholder/100/100",
    },
    {
      id: "2",
      name: "Taft Arrival Jacket",
      color: "Black",
      size: "S",
      price: 36,
      quantity: 1,
      image: "/api/placeholder/100/100",
    },
    {
      id: "3",
      name: "Overlay Shrug",
      color: "Heather Sugar",
      size: "M",
      price: 72,
      quantity: 2,
      image: "/api/placeholder/100/100",
    },
  ]);

  const handleDelete = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleEdit = (id: string) => {
    navigate(`/product/${id}`);
  };

  const handleQuantityChange = (id: string, change: number) => {
    setCartItems(
      (items) =>
        items
          .map((item) => {
            if (item.id === id) {
              const newQuantity = item.quantity + change;
              if (newQuantity <= 0) {
                return null;
              }
              return { ...item, quantity: newQuantity };
            }
            return item;
          })
          .filter(Boolean) as CartItem[]
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 transition-all z-50 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className=" mx-auto px-4 pb-8 bg-white rounded-t-lg shadow-lg w-full h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="lg:w-2/3">
            <Heading
              upperText="You Might Also Like"
              lowerText=""
              upperStyle="text-[1.67vw] text-start mt-2 uppercase mr-0 mb-1 ml-2 font-inter font-bold text-[#0d0d0d]"
              lowerStyle="text-[1.88vw] uppercase mt-0 mr-0 mb-[-0.vw] ml-2 text-start font-syncopate font-bold text-[#0d0d0d]"
            />
            <ToggleBtn
              buttons={["Recommended", "Recently Viewed"]}
              style="grid grid-cols-2 gap-1 w-full max-w-[300px] cursor-pointer text-sm h-[35px] p-1 ml-2 font-semibold border border-gray-600 rounded-full md:rounded-[2vw]"
            />
            <ProductGrid />
          </div>

          <div className="lg:w-1/3 hidden lg:block">
            <div className="bg-white rounded-lg shadow-lg p-6 h-[88vh] overflow-y-auto">
              <h2 className="font-inter text-xl font-bold text-[#0d0d0d] mb-6">
                YOUR BAG
              </h2>

              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 pb-4 border-b"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-inter text-[#0d0d0d] font-medium">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.color} • {item.size}
                      </p>
                      <p className="font-bold mt-1">£{item.price}</p>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleEdit(item.id)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleQuantityChange(item.id, -1)}
                              className="w-6 h-6 flex items-center justify-center border rounded"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(item.id, 1)}
                              className="w-6 h-6 flex items-center justify-center border rounded"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Total:</p>
                          <p className="font-bold">
                            £{item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-600 mb-4">
                  Free Standard Shipping (Unlocked)
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-inter font-medium">Total:</span>
                  <span className="font-inter font-bold">£{totalPrice}</span>
                </div>
                <button className="w-full bg-emerald-400 hover:bg-emerald-300 text-[#0d0d0d] font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <CartIcon className="w-5 h-5" />
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

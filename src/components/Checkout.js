import { useSelector, useDispatch } from "react-redux"
import { IncrementItems, DecrementItems } from "../stored/cartslice.js"

export default function Checkout() {
    const items = useSelector((state) => state.cartslice.items);
    const dispatch = useDispatch();

    const itemTotal = items.reduce((sum, item) => {
        const price = (item.price || item.defaultPrice || 0) / 100;
        return sum + price * item.quantity;
    }, 0);

    const deliveryFee = 33;
    const gst = +(itemTotal * 0.05).toFixed(2);
    const toPay = +(itemTotal + deliveryFee + gst).toFixed(2);

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/2xempty_cart_yfxml0"
                    alt="empty cart"
                    className="w-48 mb-6"
                />
                <h2 className="text-xl font-bold text-[#282c3f] mb-2">Your cart is empty</h2>
                <p className="text-[#93959f] text-sm">You can go to home page to view more restaurants</p>
            </div>
        );
    }

    return (
        <div className="max-w-[600px] mx-auto px-4 py-6" style={{ fontFamily: "'Okra', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>

            {/* Items list */}
            <div className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
                {items.map((item, idx) => {
                    const price = (item.price || item.defaultPrice || 0) / 100;
                    const isVeg = "isVeg" in item;

                    return (
                        <div key={item.id}>
                            <div className="flex items-center gap-3 px-4 py-4">

                                {/* Veg / Non-veg dot */}
                                <span className={`w-4 h-4 rounded-sm border-2 flex-shrink-0 flex items-center justify-center
                                    ${isVeg ? "border-[#3d9b6d]" : "border-[#e43b4f]"}`}>
                                    <span className={`w-1.5 h-1.5 rounded-full block
                                        ${isVeg ? "bg-[#3d9b6d]" : "bg-[#e43b4f]"}`} />
                                </span>

                                {/* Name */}
                                <p className="flex-1 text-[14px] font-semibold text-[#282c3f]">{item.name}</p>

                                {/* Counter */}
                                <div className="flex items-center border border-[#fc8019] rounded-lg overflow-hidden mx-3">
                                    <button
                                        className="px-2.5 py-1 text-[#fc8019] text-lg font-bold hover:bg-orange-50 transition-colors"
                                        onClick={() => dispatch(DecrementItems(item))}
                                    >
                                        −
                                    </button>
                                    <span className="px-2 text-[13px] font-extrabold text-[#fc8019]">
                                        {item.quantity}
                                    </span>
                                    <button
                                        className="px-2.5 py-1 text-[#fc8019] text-lg font-bold hover:bg-orange-50 transition-colors"
                                        onClick={() => dispatch(IncrementItems(item))}
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Price */}
                                <p className="text-[14px] font-semibold text-[#282c3f] min-w-[50px] text-right">
                                    ₹{(price * item.quantity).toFixed(0)}
                                </p>
                            </div>

                            {idx < items.length - 1 && (
                                <div className="mx-4 border-t border-gray-100" />
                            )}
                        </div>
                    );
                })}

                {/* Suggestions */}
                <div className="mx-4 border-t border-gray-100 mt-1" />
                <div className="px-4 py-3 flex items-center gap-2 text-[#93959f]">
                    <span className="text-xl font-serif">"</span>
                    <input
                        className="flex-1 text-[13px] bg-transparent outline-none placeholder-[#93959f]"
                        placeholder="Any suggestions? We will pass it on..."
                    />
                </div>
            </div>

            {/* No-contact delivery */}
            <div className="bg-white rounded-xl shadow-sm mb-4 px-4 py-4 flex gap-3 items-start">
                <input type="checkbox" className="mt-1 accent-[#fc8019] w-4 h-4 flex-shrink-0" />
                <div>
                    <p className="text-[14px] font-bold text-[#282c3f]">Opt in for No-contact Delivery</p>
                    <p className="text-[12px] text-[#93959f] mt-0.5 leading-snug">
                        Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)
                    </p>
                </div>
            </div>

            {/* Bill Details */}
            <div className="bg-white rounded-xl shadow-sm px-4 py-4">
                <p className="text-[15px] font-bold text-[#282c3f] mb-4">Bill Details</p>

                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span className="text-[13px] text-[#686b78]">Item Total</span>
                        <span className="text-[13px] text-[#282c3f] font-medium">₹{itemTotal.toFixed(0)}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-[13px] text-[#686b78]">Delivery Fee</span>
                        <span className="text-[13px] text-[#282c3f] font-medium">₹{deliveryFee}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-[13px] text-[#686b78]">GST & Other Charges</span>
                        <span className="text-[13px] text-[#282c3f] font-medium">₹{gst}</span>
                    </div>
                </div>

                <div className="border-t border-dashed border-gray-200 my-4" />

                <div className="flex justify-between items-center">
                    <span className="text-[15px] font-extrabold text-[#282c3f]">TO PAY</span>
                    <span className="text-[15px] font-extrabold text-[#282c3f]">₹{toPay}</span>
                </div>
            </div>

            {/* Place Order button */}
            <button className="w-full mt-6 bg-[#fc8019] text-white font-bold text-[15px] py-4 rounded-xl shadow-lg hover:bg-[#e8731a] transition-colors">
                Place Order  •  ₹{toPay}
            </button>

        </div>
    );
}
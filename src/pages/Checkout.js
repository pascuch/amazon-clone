import Header from "../components/Header";
import banner from "../assets/checkout-banner.png";
import { useSelector } from "react-redux";
import { selectedItems, selectTotal } from "../redux/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { selectUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate()
  const items = useSelector(selectedItems);
  const total = useSelector(selectTotal);
  const user = useSelector(selectUser);

  const sortedItems = [...items].sort((a, b) => a.id - b.id);

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto mt-[104px]">
        <div className="flex-grow m-5 shadow-sm">
          <img src={banner} alt="banner" />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {!items.length
                ? "Your Amazon Basket is empty"
                : "Your shopping basket"}
            </h1>
            {sortedItems.length > 0
              ? sortedItems.map((e, i) => (
                  <CheckoutProduct
                    key={i}
                    id={e.id}
                    title={e.title}
                    price={e.price}
                    rating={e.rating}
                    description={e.description}
                    category={e.category}
                    image={e.image}
                    hasPrime={e.hasPrime}
                  />
                ))
              : ""}
          </div>
        </div>
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <div>
              <h2 className="whitespace-nowrap">
                {`Subtotal (${items.length} items): `}
                <span className="font-bold">
                  <Currency quantity={total} currency="EUR" />
                </span>
              </h2>
              <button onClick={user ? '' : () => navigate('/signin')} className="button mt-2">{user ? 'Proceed to Checkout' : 'Sign In to Checkout'}</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;

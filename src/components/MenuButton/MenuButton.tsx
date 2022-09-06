import { Link } from "react-router-dom";
type Props = {
  to: string;
  children: any;
};
const MenuButton = ({ to, children }: Props) => (
  <Link
    className="text-center mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-10 py-4 text-sm"
    to={to}
  >
    {children}
  </Link>
);

export default MenuButton;

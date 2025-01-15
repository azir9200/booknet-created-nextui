import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b w-[90%] mx-auto">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Button to toggle the dropdown */}
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <ul
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            role="menu"
          >
            <li role="menuitem">
              <Link href="/">Home</Link>
            </li>
            <li role="menuitem">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li role="menuitem">
              <Link href="/about">About Us</Link>
            </li>
            <li role="menuitem">
              <Link href="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1" role="menu">
          <li role="menuitem">
            <Link href="/">Home</Link>
          </li>
          <li role="menuitem">
            <Link href="/blogs">Blogs</Link>
          </li>
          <li role="menuitem">
            <Link href="/create">Create Blog</Link>
          </li>
          <li role="menuitem">
            <Link href="/about">About Us</Link>
          </li>
          <li role="menuitem">
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <Link
          href="/login"
          className="btn btn-accent text-white rounded-full px-5"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

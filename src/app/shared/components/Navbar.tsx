import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-4 sticky top-0 z-50 bg-white">
      <div className="flex items-center">
        <button type="button" className="block">
          <svg
            width="28"
            height="18"
            viewBox="0 0 28 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 1L1 1"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M19 9L1 9"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M14 17H1"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <ul className="hidden lg:flex space-x-6 ml-4">
          <li>
            <Link href="/" className="text-gray-700 font-medium text-base">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-gray-700 font-medium text-base"
            >
              Collections
            </Link>
          </li>
          <li>
            <Link
              href="#newProducts"
              className="text-gray-700 font-medium text-base"
            >
              New
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <svg
          className="lg:w-12 lg:h-12 w-8 h-8"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="25"
            width="35.3553"
            height="35.3553"
            transform="rotate(45 25 0)"
            fill="#D9D9D9"
          />
          <path
            d="M25.25 25L25.25 0.603553L49.6464 25L25.25 49.3964V25Z"
            fill="black"
            stroke="#060606"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="flex items-center lg:space-x-4 space-x-2">
        <button
          type="button"
          className="bg-black text-white w-10 h-10 rounded-full justify-center items-center lg:flex hidden"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8058 15.6943L11.7597 14.9458L11.8058 15.6943ZM6.33265 5.82443L6.27616 6.5723C6.47947 6.58766 6.68026 6.51958 6.83231 6.38375C6.98436 6.24792 7.07455 6.05605 7.08213 5.8523L6.33265 5.82443ZM15.5253 12.3716L16.264 12.5015L15.5253 12.3716ZM11.7597 14.9458C10.1685 15.0438 8.53438 15.2341 6.93554 15.0486C5.37518 14.8676 3.93299 14.3326 2.75936 13.0189L1.64072 14.0182C3.12623 15.6811 4.95228 16.3286 6.76269 16.5386C8.53465 16.7442 10.3739 16.534 11.852 16.4429L11.7597 14.9458ZM2.75936 13.0189C1.61674 11.7398 1.38577 10.0269 1.96456 8.70578C2.52249 7.43233 3.89674 6.39259 6.27616 6.5723L6.38913 5.07656C3.4577 4.85516 1.43608 6.17414 0.59064 8.10384C-0.233944 9.98593 0.124216 12.3206 1.64072 14.0182L2.75936 13.0189ZM11.852 16.4429C12.3848 16.4101 12.9662 16.3726 13.496 16.265C14.0256 16.1575 14.5862 15.9652 15.0342 15.565L14.0349 14.4464C13.8708 14.5929 13.6086 14.7116 13.1976 14.795C12.7869 14.8784 12.31 14.9118 11.7597 14.9458L11.852 16.4429ZM16.264 12.5015C16.5205 11.043 16.9359 9.23899 16.9307 7.45517C16.9254 5.63262 16.487 3.74539 15.0015 2.08251L13.8829 3.08183C15.0565 4.3956 15.4261 5.88874 15.4307 7.45957C15.4354 9.06912 15.0628 10.6715 14.7867 12.2417L16.264 12.5015ZM15.0015 2.08251C13.485 0.384932 11.2054 -0.233189 9.24257 0.374781C7.23012 0.998132 5.69242 2.85881 5.58317 5.79656L7.08213 5.8523C7.17081 3.46776 8.35832 2.21898 9.68639 1.80762C11.0641 1.38087 12.7403 1.80277 13.8829 3.08183L15.0015 2.08251ZM14.7867 12.2417C14.6912 12.7847 14.6044 13.2548 14.4754 13.6535C14.3463 14.0525 14.199 14.2998 14.0349 14.4464L15.0342 15.565C15.4823 15.1647 15.7363 14.6293 15.9026 14.1152C16.069 13.6007 16.1715 13.0272 16.264 12.5015L14.7867 12.2417Z"
              fill="white"
            />
          </svg>
        </button>

        <div className="flex items-center">
          <Link
            href={`/cart`}
            className="bg-black text-white -mr-1 w-14 text-xs h-10 rounded-full justify-center items-center lg:flex hidden"
          >
            <button type="button">Cart</button>
          </Link>

          <Link
            href={`/cart`}
            className="border-4 border-black text-black w-10 h-10 rounded-full flex justify-center items-center"
          >
            <button type="button">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.58287 12.8256C2.51504 14 4.24996 14 7.7198 14H8.2802C11.75 14 13.485 14 14.4171 12.8256M1.58287 12.8256C0.650708 11.6511 0.970433 9.86813 1.60989 6.30212C2.06463 3.76617 2.292 2.49819 3.15523 1.74909M1.58287 12.8256C1.58287 12.8256 1.58287 12.8256 1.58287 12.8256ZM14.4171 12.8256C15.3493 11.6511 15.0296 9.86813 14.3901 6.30213C13.9354 3.76617 13.708 2.49819 12.8448 1.74909M14.4171 12.8256C14.4171 12.8256 14.4171 12.8256 14.4171 12.8256ZM12.8448 1.74909C11.9816 1 10.7478 1 8.2802 1H7.7198C5.25223 1 4.01845 1 3.15523 1.74909M12.8448 1.74909C12.8448 1.7491 12.8448 1.74909 12.8448 1.74909ZM3.15523 1.74909C3.15523 1.7491 3.15523 1.74909 3.15523 1.74909Z"
                  stroke="black"
                  strokeWidth="1.5"
                />
                <path
                  d="M6 4C6.29112 5.16519 7.07665 6 8 6C8.92335 6 9.70888 5.16519 10 4"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </Link>
        </div>

        <button
          type="button"
          className="bg-black text-white w-10 h-10 rounded-full flex justify-center items-center"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="6.99998"
              cy="4.42857"
              r="3.42857"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M13 13.8571C13 11.9636 10.3137 10.4286 7 10.4286C3.68629 10.4286 1 11.9636 1 13.8571"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

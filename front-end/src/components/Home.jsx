/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FiSun, FiPlus, FiMessageSquare, FiMenu } from "react-icons/fi";
import { IoSend } from "react-icons/io5";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const chatHistory = [
    "How to write an Impacting ...",
    "Web accessibility",
    "Design inspiration",
    "What is machine learning",
  ];

  const features = [
    {
      title: "Clear and precise",
      description: "Pariatur sint laborum cillum aute consectetur iure.",

      icon: (
        <div className="md:ml-24 sm:ml-80 mb-6 mt-3">
          <svg
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.80682 5.44722L3.80682 5.44722L3.80563 5.4491C3.69179 5.63054 3.59247 5.81014 3.50835 5.9878C3.18992 5.31467 2.6472 4.62355 1.86827 4.03922C1.57595 3.81875 1.27581 3.63411 0.970368 3.48956C1.8029 3.10916 2.56382 2.484 3.10019 1.70606C3.25883 1.47687 3.39499 1.24545 3.50676 1.00949C3.86867 1.77499 4.49325 2.50201 5.24322 3.03278C5.4987 3.21452 5.76218 3.36956 6.03252 3.4952C5.14656 3.92226 4.29499 4.67683 3.80682 5.44722Z"
              stroke="#E5E5E5"
            />
          </svg>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.22064 10.2118L7.21887 10.2147C6.93174 10.6723 6.69644 11.1214 6.51522 11.5618C5.96941 10.229 4.93046 8.82046 3.3623 7.64412C2.70933 7.15163 2.03757 6.75886 1.35552 6.47829C3.01601 5.80877 4.55307 4.60074 5.61057 3.06691C5.9825 2.52959 6.28525 1.9878 6.51278 1.43246C7.13374 2.95297 8.34833 4.4305 9.84074 5.48667C10.4219 5.90008 11.024 6.23666 11.6432 6.48785C9.90475 7.22342 8.17754 8.70175 7.22064 10.2118Z"
              stroke="#E5E5E5"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Personalized answers",
      description: "Pariatur sint laborum cillum aute consectetur iure.",
      icon: (
        <div className="items-center md:ml-20 sm:ml-80 mb-6 mt-3">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.49994 7.49998C7.65827 7.49998 6.99994 8.15831 6.99994 9.99998C6.99994 11.8416 7.65819 12.5 9.49986 12.5C11.3415 12.5 11.9999 11.8416 11.9999 9.99998C11.9999 8.15831 11.3416 7.49998 9.49994 7.49998ZM16.9499 9.16665C16.5665 5.69165 13.8082 2.93331 10.3332 2.54998V0.833313H8.66652V2.54998C5.19152 2.93331 2.43319 5.69165 2.04986 9.16665H0.333191V10.8333H2.04986C2.43319 14.3083 5.19152 17.0666 8.66652 17.45V19.1666H10.3332V17.45C13.8082 17.0666 16.5665 14.3083 16.9499 10.8333H18.6665V9.16665H16.9499ZM9.49986 15.8333C6.27486 15.8333 3.66652 13.225 3.66652 9.99998C3.66652 6.77498 6.27486 4.16665 9.49986 4.16665C12.7249 4.16665 15.3332 6.77498 15.3332 9.99998C15.3332 13.225 12.7249 15.8333 9.49986 15.8333Z"
              fill="#E5E5E5"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Increased efficiency",
      description: "Pariatur sint laborum cillum aute consectetur iure.",
      icon: (
        <div className="md:ml-24 sm:ml-80 mb-6 mt-5">
          <svg
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8333 0L13.7416 1.90833L9.67496 5.975L6.34162 2.64167L0.166626 8.825L1.34163 10L6.34162 5L9.67496 8.33333L14.925 3.09167L16.8333 5V0H11.8333Z"
              fill="#E5E5E5"
            />
          </svg>
        </div>
      ),
    },
  ];
  return (
    <div className="flex max-h-[860px] md:h-[810px] sm:h-[860px] bg-black md:mr-0 sm:-mr-[50px]">
      {/* Sidebar */}
      <div
        className={`fixed md:relative w-72 bg-[#222222] md:h-full sm:mb-5  transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full p-4 ">
          {/* User Profile */}
          <div className="flex items-center space-x-3 mb-6 bg-[#FFFFFF0D] p-3 rounded-lg">
            <div className="w-8 h-8 bg-[linear-gradient(91.96deg,_rgba(1,154,90,0.7)_-16.64%,_rgba(1,154,90,0.8)_117.28%)] rounded-full flex items-center justify-center">
              <span className="text-white">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.47 14.256H8.226C8.352 13.482 8.694 12.636 9.27 11.718C10.422 9.9 12.744 8.118 14.742 7.704V6.948C13.752 6.732 12.78 6.282 11.844 5.616C9.936 4.266 8.532 2.25 8.226 0.432H7.47C7.29 1.386 6.876 2.304 6.228 3.24C4.95 5.094 2.952 6.462 0.918 6.948V7.704C1.944 7.92 2.988 8.424 4.014 9.198C6.102 10.764 7.2 12.708 7.47 14.256Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <div>
              <div className="text-white md:text-[16px] sm:text-[14px]">
                Antoine Piedanna
              </div>
              <div className="text-gray-400 md:text-[14px] sm:text-[14px]">
                Free account
              </div>
            </div>
          </div>

          {/* Chat History */}
          <div className="z-40">
            <div className="flex-grow overflow-y-auto md:space-y-2 sm:space-y-0">
              {chatHistory.map((chat, index) => (
                <button
                  key={index}
                  className="w-full text-left text-gray-300 md:text-[16px] sm:text-[14px] hover:bg-gray-700 p-3 rounded-lg flex items-center space-x-2"
                >
                  <FiMessageSquare />
                  <span>{chat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* New Chat Button */}
          <div className="items-start md:mb-32 sm:mb-4 ">
            <button className="grid	 bg-[linear-gradient(91.96deg,_rgba(1,154,90,0.7)_-16.64%,_rgba(1,154,90,0.8)_117.28%)] text-white p-3 rounded-lg space-x-2 mt-2 mb-4 md:min-w-full sm:min-w-[200px]	">
              <div className="flex justify-self-start md:text-[16px] sm:text-[14px]">
                <FiPlus className="mt-1  mr-2" />
                <span>Start a new chat</span>
              </div>
            </button>
          </div>

          <div className="relative w-[320px] ml-2 mb-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-[240px] border-t border-gray-500"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-white text-gray-500"></span>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="md:space-y-2 sm:space-y-0 md:text-[16px] sm:text-[14px]">
            <button className="w-full text-gray-300 hover:bg-gray-700 p-3 rounded-lg flex items-center space-x-2">
              {/* <FiTrash2 /> */}
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33333 5.5V13.8333H2.66667V5.5H9.33333ZM8.08333 0.5H3.91667L3.08333 1.33333H0.166668V3H11.8333V1.33333H8.91667L8.08333 0.5ZM11 3.83333H1V13.8333C1 14.75 1.75 15.5 2.66667 15.5H9.33333C10.25 15.5 11 14.75 11 13.8333V3.83333Z"
                  fill="#E5E5E5"
                />
              </svg>

              <span>Clear all conversations</span>
            </button>
            <button className="w-full text-gray-300 hover:bg-gray-700 p-3 rounded-lg flex items-center space-x-2">
              <FiSun />
              <span>Switch Light Mode</span>
            </button>
            <button className="w-full text-gray-300 hover:bg-gray-700 p-3 rounded-lg flex items-center space-x-2">
              {/* <BiCrown className="text-yellow-500" /> */}
              <div className="">
                <svg
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.80682 5.44722L3.80682 5.44722L3.80563 5.4491C3.69179 5.63054 3.59247 5.81014 3.50835 5.9878C3.18992 5.31467 2.6472 4.62355 1.86827 4.03922C1.57595 3.81875 1.27581 3.63411 0.970368 3.48956C1.8029 3.10916 2.56382 2.484 3.10019 1.70606C3.25883 1.47687 3.39499 1.24545 3.50676 1.00949C3.86867 1.77499 4.49325 2.50201 5.24322 3.03278C5.4987 3.21452 5.76218 3.36956 6.03252 3.4952C5.14656 3.92226 4.29499 4.67683 3.80682 5.44722Z"
                    stroke="#E5E5E5"
                  />
                </svg>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.22064 10.2118L7.21887 10.2147C6.93174 10.6723 6.69644 11.1214 6.51522 11.5618C5.96941 10.229 4.93046 8.82046 3.3623 7.64412C2.70933 7.15163 2.03757 6.75886 1.35552 6.47829C3.01601 5.80877 4.55307 4.60074 5.61057 3.06691C5.9825 2.52959 6.28525 1.9878 6.51278 1.43246C7.13374 2.95297 8.34833 4.4305 9.84074 5.48667C10.4219 5.90008 11.024 6.23666 11.6432 6.48785C9.90475 7.22342 8.17754 8.70175 7.22064 10.2118Z"
                    stroke="#E5E5E5"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span>Upgrade to GPT Pro</span>
            </button>
            <button className="w-full text-gray-300 hover:bg-gray-700 p-3 rounded-lg flex items-center space-x-2">
              {/* <FiSettings /> */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8333 13.8333H2.16667V2.16667H8V0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8H13.8333V13.8333ZM9.66667 0.5V2.16667H12.6583L4.46667 10.3583L5.64167 11.5333L13.8333 3.34167V6.33333H15.5V0.5H9.66667Z"
                  fill="#E5E5E5"
                />
              </svg>

              <span>Updates & FAQ</span>
            </button>
            <button className="w-full text-red-400 hover:bg-gray-700 p-3 rounded-lg flex items-center space-x-2">
              {/* <FiLogOut /> */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.83333 0.5H7.16667V8.83333H8.83333V0.5ZM12.8583 2.30833L11.675 3.49167C12.9917 4.55 13.8333 6.175 13.8333 8C13.8333 11.225 11.225 13.8333 8 13.8333C4.775 13.8333 2.16667 11.225 2.16667 8C2.16667 6.175 3.00833 4.55 4.31667 3.48333L3.14167 2.30833C1.525 3.68333 0.5 5.71667 0.5 8C0.5 12.1417 3.85833 15.5 8 15.5C12.1417 15.5 15.5 12.1417 15.5 8C15.5 5.71667 14.475 3.68333 12.8583 2.30833Z"
                  fill="#FF5555"
                />
              </svg>

              <span>Log out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}

      <div className="flex-1 flex flex-col m-3  border border-transparent rounded-[10px] bg-[radial-gradient(50%_50%_at_50%_100%,rgba(60,110,50,0.5)_0%,rgba(34,34,34,0)_60%)] bg-[#222222]">
        {/* Welcome Section */}
        <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-[64px] font-[600] text-white mb-2">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[rgba(9,127,77,0.5)] to-[rgba(9,127,77,0)]">
              ChatGPT
            </span>
          </h1>
          <p className="text-[#E5E5E5] mb-12 font-[400] text-[16px]">
            The power of AI at your service - Tame the knowledge !
          </p>

          {/* Search Input */}
          <div className="md:w-[719px] sm:w-[700px] max-w-2xl mb-12">
            <div className="md:relative z-0">
              <input
                type="text"
                placeholder='Example : "Explain quantum computing in simple terms"'
                className=" z-0 w-full bg-[#FFFFFF0D] text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />

              <button className="md:absolute md:mr-0 sm:mr-4 md:right-2 top-1/2 md:-translate-y-1/2 sm:-translate-y-10 md:translate-x-0 sm:translate-x-80 bg-[linear-gradient(91.96deg,_rgba(1,154,90,0.7)_-16.64%,_rgba(1,154,90,0.8)_117.28%)] bg-cover rounded-md text-white p-2">
                <IoSend />
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-1 w-[700px] max-w-4xl">
            {features.map((feature, index) => (
              <div key={index} className="  p-6 text-center">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-[#E5E5E5] font-[500] mb-2 text-[16px]">
                  {feature.title}
                </h3>
                <p className="text-[#E5E5E5] font-[300] text-[14px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 p-2 rounded-lg text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
     
        <FiMenu />
      </button>
    </div>
  );
};

export default Home;

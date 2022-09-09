import React from "react"

function Header() {

    const [toggle, setToggle] = React.useState(false);

    const nav = [
        {
            name: "Tentang Diri",
            link: "#tentangDiri"
        },

        {
            name: "Project",
            link: "#project"
        },
        {
            name: "Sertifikasi",
            link: "#sertifikasi"
        },
        {
            name: "Contact",
            link: "#contact"
        },
        {
            name: "Chat",
            link: "https://wa.me/082236241677"
        }
    ]
    return (
        <div>
            <div className="hidden lg:flex bg-white fixed w-full top-0 z-10">
                <div className=" py-3  flex shadow-md w-full items-center">
                    <div className="flex justify-evenly w-full">
                            <h1 className="text-6xl font-Recursive">Bio<span className="text-red-500">.</span></h1>
                        <ul className=" flex flex-row items-center text-lg">

                            {
                                nav.map((name) => {
                                    return (
                                        <li className="flex mx-10">
                                            <a href={name.link}>{name.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                            <li className=" flex items-center justify-center list-none ">
                                <a href="https://wa.me/082236241677" className="border-solid border-2 p-2 rounded-lg border-slate-500">Chat</a>
                            </li>
                    </div>
                </div>
            </div>

            <div className="flex lg:hidden bg-white fixed w-full top-0 z-10">
                <div className=" py-3  flex shadow-md w-full items-center">
                    <div className="flex px-24 w-full items-center justify-between">
                            <h1 className="text-6xl font-Recursive">Bio<span className="text-red-500">.</span></h1>
                        <ul className={`${toggle ? 'translate-x-[1000px] flex' : 'translate-x-0'} transition duration-500 bg-[#ffffffa9] z-20 flex flex-col justify-end absolute top-24 right-0 text-lg`}>
                            {
                                nav.map((name) => {
                                    return (
                                        <li className="flex mx-10 my-10">
                                            <a href={name.link}>{name.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="flex" onClick={() => {
                            setToggle(!toggle)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 justify-end">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>

                        
                        {/* <li className="md:hidden flex items-center justify-center list-none ">
                            <a href="" className="border-solid border-2 p-2 rounded-lg border-slate-500">Chat</a>
                        </li> */}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header;
function Footer(){
    return(
        <div className="border-2 border-solid border-slate-200 mt-20 flex flex-col">
            <div id="contact" className="scroll-mt-20 mx-[100px] flex flex-col justify-center items-center">
                <h1 className="text-4xl py-5 font-Nunito justify-center">Contact</h1>
                <p className="font-Lato text-xl pb-5">Cek Media Sosial di bawah ini!</p>
                <ul className="py-5 text-lg font-Lato flex justify-between w-full pb-10">
                    <li className="flex items-center flex-row">
                        <a href="https://github.com/Natabagass">Github</a>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" className="px-2"/>
                    </li>
                    <li className="flex justif-center items-center flex-row">
                        <a href="https://linkedin.com//in/natabagass">LinkedIn</a>
                        <img src="https://img.icons8.com/color/30/000000/linkedin-circled--v1.png" className="px-2"/>
                    </li >
                    <li className="flex justif-center items-center flex-row">
                        <a href="https://www.instagram.com/bagasnataaa/">Instagram</a>
                        <img src="https://img.icons8.com/material-outlined/30/000000/instagram-new--v1.png" className="px-2"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return(
        <div className="hero_section">
            <div className="hero_wrapper bg-hero-banner bg-no-repeat pt-[45px]">
                <div className="hero_container mx-auto">
                    <div className="hero_area">
                        <div className="hero_top">
                            <div className="flex justify-between items-center">
                                <div className="logo">
                                    <Image 
                                    src="/assets/images/logo.png" 
                                    alt="logo image"
                                    width={104}
                                    height={104}
                                    />
                                </div>
                                <div className="menu_list">
                                    <ul className="flex items-center m-0 p-0 relative">
                                        <li>
                                            <Link href="#">About</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Testimonials</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Contact</Link>
                                        </li>

                                        <li>
                                            <Link href="#" className="mr-5">
                                                <img className="ml-[60px]" src="/assets/images/appleImage.png" alt="appleImage" />
                                            </Link>
                                        </li>
                                        <div className="download_link absolute bottom-[80px] right-[70px]">
                                            <Link href="#" className="font-bold text-[#90DEE2] text-[16px] font-interFont">Download Now</Link>
                                        </div>
                                        <li>
                                            <Link href="#" className="mr-5">
                                                <img className="ml-3" src="/assets/images/googleImage.png" alt="google image" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="hero_bottom max-w-[1225px] m-auto">
                            <div className="hero_bottom_content">
                                <h2>WANT TO MAKE YOUR <span className="text-bannerTextColor">DREAMS</span> COME TRUE?</h2>
                                <p>Download iDreamers app to create, Manage and Fund your yours and others Dreams. Created to help you make your dreams come true. The objective of the platform is to bring to the public a recipe for success that is used by large corporations to achieve their objectives which are in fact dreams. </p>
                                <div className="flex justify-center">
                                    <div className="applePlay mr-5">
                                        <Link href="#">
                                            <img src="/assets/images/appleBlackImage.png" alt="image" />
                                        </Link>
                                    </div>
                                    <div className="googlePlay">
                                        <Link href="#">
                                            <img src="/assets/images/googleBlackImage.png" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero;
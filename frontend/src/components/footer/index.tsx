"use client";

const Footer = () => {
    return (
        <footer className="bg-darker-blue text-light-gray py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">
                    &copy; {new Date().getFullYear()} Kleon. All rights reserved.
                </p>
                <p className="nanum-myeongjo-regular mb-4">
                    Designed with <span className="text-bright-yellow">❤️</span> by Kleon Team
                </p>
                <div className="flex justify-center gap-4 mb-4">
                    <a
                        href="https://github.com/SargamPuram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-gray hover:text-white transition-colors duration-300"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://x.com/sargam_puram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-gray hover:text-white transition-colors duration-300"
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

  
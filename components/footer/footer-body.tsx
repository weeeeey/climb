import Image from 'next/image';
import React from 'react';

export const FooterBody = () => {
    const current_year = new Date().getFullYear();
    return (
        <div className=" sm:mx-20 md:mx-40">
            <div className="px-5 py-3  flex justify-between items-center border-t font-thin text-xs ">
                <div className="flex flex-col space-y-2">
                    <div>
                        Copyright {current_year}. 위영진. All rights reserved.
                    </div>
                    <div>
                        문의 <span>qser155@naver.com</span>
                    </div>
                </div>
                <div className="flex space-x-2 opacity-80">
                    <a href="https://github.com/weeeeey" target="_blank">
                        <Image
                            width={20}
                            height={20}
                            alt="github"
                            src="/git.png"
                        />
                    </a>
                    <a href="https://weeeeey.tistory.com/" target="_blank">
                        <Image
                            width={20}
                            height={20}
                            alt="tistory"
                            src="/tistory.svg"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/zerojin2233/"
                        target="_blank"
                    >
                        <Image
                            width={20}
                            height={20}
                            alt="instagram"
                            src="/insta.png"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

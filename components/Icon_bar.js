import React from "react";
import Image from 'next/image';
import Link from 'next/link';


function Icon_bar() {
    return (
        <div className="flex items-center justify-center text-white">
            <div className="bg-[#6e8b5e] mb-6  border-b-2 border-Stone-200 w-[98%] mx-auto">

                <div className="flex justify-center bg-[#547443] space-x-4">
                    <Link href="/directory/water" scroll={false}>
                        <Image
                            src="/images/jouro1.png"
                            alt="High-tech Garden logo"
                            width={80}
                            height={80}
                        />
                    </Link>
                    <Link href="/directory/garden" scroll={false}>
                        <Image
                            src="/images/garden.png"
                            alt="High-tech Garden logo"
                            width={80}
                            height={80}
                        />
                    </Link>
                    <Link href="/directory/logic" scroll={false}>
                        <Image
                            src="/images/raspi.png"
                            alt="High-tech Garden logo"
                            width={80}
                            height={80}
                        />
                    </Link>
                    <Link href="/directory/photo" scroll={false}>
                        <Image
                            src="/images/camera.png"
                            alt="High-tech Garden logo"
                            width={80}
                            height={80}
                        />
                    </Link>
                </div>

            </div>

        </div>

    );
}

export default Icon_bar;
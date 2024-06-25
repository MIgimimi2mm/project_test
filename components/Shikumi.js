import React from "react";
import Image from 'next/image';
import Link from 'next/link';


function Shikumi() {
    return (
        <div className="flex items-center justify-center">
            <Link href="/directory/water">
                <div className="border rounded-lg p-4 bg-[#6e8b5e] mb-6 px-8">

                    <div className="grid grid-cols-2 gap-4">
                        <div class="mr-4">

                            <Image
                                src="/images/raspi.png"
                                alt="High-tech Garden logo"
                                width={150}
                                height={150}
                            />



                        </div>
                        <div class="flex items-center justify-center">

                            <div>
                                <div class="text-3xl  mb-2">
                                    <nobr>
                                        仕組みを知る
                                    </nobr>
                                </div>
                                <div class="flex items-center justify-center">
                                    タップしてね！

                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </Link>
        </div>
    );
}

export default Shikumi;
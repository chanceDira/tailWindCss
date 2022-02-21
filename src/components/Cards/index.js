import React from "react";

const Cards = ({
    ...otherProps
}) => {
    return (
        <div className="flex flex-row flex-wrap py-20 justify-center">
            <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
                <div className="bg-white">
                <div>
                    <img className="w-full" src="https://cdn.pixabay.com/photo/2020/06/22/06/07/kigali-5327838_960_720.jpg" />
                </div>
                <div className="p-2.5">
                    <ul>
                        <li className="list-none">
                            <span className="font-bold text-base">
                                Title
                            </span>
                        </li>
                        <li className="list-none">
                            <span className="text-base">
                                Descr
                            </span>
                        </li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
                <div className="bg-white">
                <div>
                    <img className="w-full" src="https://cdn.pixabay.com/photo/2020/06/22/06/07/kigali-5327838_960_720.jpg" />
                </div>
                <div className="p-2.5">
                    <ul>
                        <li className="list-none">
                            <span className="font-bold text-base">
                                Title
                            </span>
                        </li>
                        <li className="list-none">
                            <span className="text-base">
                                Descr
                            </span>
                        </li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
                <div className="bg-white">
                <div>
                    <img className="w-full" src="https://cdn.pixabay.com/photo/2020/06/22/06/07/kigali-5327838_960_720.jpg" />
                </div>
                <div className="p-2.5">
                    <ul>
                        <li className="list-none">
                            <span className="font-bold text-base">
                                Title
                            </span>
                        </li>
                        <li className="list-none">
                            <span className="text-base">
                                Descr
                            </span>
                        </li>
                    </ul>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Cards
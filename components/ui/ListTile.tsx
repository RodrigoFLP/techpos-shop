import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
    title: string;
    description: string;
    src: string;
    price: number;
}

export const ListTile: FC<Props> = ({ title, description, src, price }) => {

    return (
        <Link href={`/menu/${title}`} passHref>
            <div className="w-full h-28 flex rounded-2xl shadow-lg bg-white shadow-gray-100 
        overflow-hidden space-x-4 cursor-pointer hover:scale-95 transition-all">
                <div id="image" className="w-28 bg-slate-50 rounded-r-2xl relative overflow-hidden">
                    <Image src={src}
                        layout='fill'
                        alt={title}
                        className="object-cover" />
                </div>
                <div className="flex flex-col justify-center pr-4 py-2 flex-1">
                    <div className="font-semibold flex-1">
                        {title}
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">
                        {description}
                    </p>
                    <div className="font-extrabold">
                        <span className="text-sm text-primary">
                            $
                        </span>
                        {price.toFixed(2)}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ListTile;
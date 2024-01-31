import Title from "../title";
import Trending from "../trending";
import Filter from "../filter";

export default function Content() {
    return (
        <div className="w-full pt-8" id="content">
            <div className="container mx-auto py-6 px-8">
                <Trending />
                <Title text="TELUSURI LEBIH BANYAK LAGI!" />
                <Filter />
            </div>
        </div>
    );
}
import Title from "../title";
import Trending from "../trending";
import Filter from "../filter";

export default function Content() {
    return (
        <div className="bg-neutral-50 w-full rounded-base absolute" id="content">
            <div className="container mx-auto py-6 px-8">
                <Trending />
                <Title text="TELUSURI LEBIH BANYAK LAGI!" />
                <Filter />
            </div>
        </div>
    );
}
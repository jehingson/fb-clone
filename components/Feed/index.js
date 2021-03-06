import Posts from "../Posts";
import InputBox from "./InputBox";
import Stories from "./Stories";

export default function Feed() {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xj:me-20 overflow-y-auto scrollbar-hide">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                {/* Stories */}
                {/* InputBox */}
                {/* Posts */}
                <Stories />
                <InputBox />
                <Posts />
            </div>
        </div>
    )
}

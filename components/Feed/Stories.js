import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Jehingson dev",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    }
]

export default function Stories() {

    console.log('eee', stories)

    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {
                stories.map((story, index) => <StoryCard
                    key={index}
                    name={story.name}
                    src={story.src}
                    profile={story.profile} />
                )
            }
        </div>
    )
}

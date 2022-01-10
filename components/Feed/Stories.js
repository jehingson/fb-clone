import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Jehingson dev",
        src: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Fjson%20dev.jpg?alt=media&token=b98cd33c-d4e7-4b74-840b-1106e8143532",
        profile: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Fjsondevp.jpg?alt=media&token=d06b89c5-d5e6-4586-8a09-b4f04d1f5059"
    },
    {
        name: "Scarlett Johansson",
        src: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Fwanda.jpg?alt=media&token=fe3742e2-135d-4f3e-9629-9d965996d9e8",
        profile: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Fscarlle.jfif?alt=media&token=4ba59b02-57fc-4a88-9193-795dbb25cda3"
    },
    {
        name: "Robert Downey",
        src: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Firom%20man.jpg?alt=media&token=bb77935b-5566-4ac7-b0ec-ea572413c0f6",
        profile: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Fdowney.jpg?alt=media&token=bed76d24-9cdf-4eb8-a9ca-3fbe2414e9f9"
    },
    {
        name: "Elizabeth Olsen",
        src: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Fvision.jpg?alt=media&token=84d852c1-b056-46f2-8d9f-295b959150e2",
        profile: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Flicensed.jfif?alt=media&token=774138fe-0b84-43da-8ee6-f1edd21f83de"
    },
    {
        name: "Tom Holland",
        src: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Fspaiderman.jpg?alt=media&token=8b072a93-7983-4625-a33d-5f24300b32a6",
        profile: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Ftom.jpg?alt=media&token=eb69554c-81bd-4a5f-8805-bc3815910f61"
    }
]

export default function Stories() {

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

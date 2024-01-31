export default function Title({text}: {text: string}) {
    return (
        <div className="title font-bold text-neutral-800 text-2xl">
            {text}
        </div>
    );
}
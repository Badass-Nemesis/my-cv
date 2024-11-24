interface TagInterface {
    name: string;
}

export default function Tags({ name }: TagInterface) {
    return (
        <div className="tags">
            {name}
        </div>
    );
}
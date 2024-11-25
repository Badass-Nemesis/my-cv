interface TagInterface {
    name: string;
    skillsTag?: boolean;
}

export default function Tags({ name, skillsTag = false }: TagInterface) {
    return (
        <div>
            {skillsTag ? (
                <div className="skill-tags">
                    {name}
                </div>
            ) : (
                <div className="tags">
                    {name}
                </div>
            )}
        </div>
    );
}
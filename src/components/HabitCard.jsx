export default function HabitCard({
    id,
    title,
    goal,
    completed,
    onShowDetails,
}) { 
    return (
        <article className={`habit-card ${completed ? "is-completed" : ""}`}>
            <div>
                <h2>{title}</h2>
                <p>Meta: {goal}</p>
            </div>

            <button type="button" onClick={() => onShowDetails(id)}>
                Ver detalhes
            </button>
            </article>
    );       
}
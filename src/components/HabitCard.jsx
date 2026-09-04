export default function HabitCard({ title, goal, completed }) {
    return (
        <article className={`habit-card ${completed ? "is-completed" : ""}`}>
            <div>
                <h2>{title}</h2>
                <p>Meta: {goal}</p>
            </div>
            <span className="habit-status">
                {completed ? "Concluído" : "Pendente"}
            </span>
        </article>
    );
}
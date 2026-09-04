import HabitCard from "./HabitCard";

export default function HabitList({ habits }) {
    if  (!habits || habits.length === 0) {
        return <p>Nenhum hábito encontrado.</p>;
    }

    return (
        <section className="habit-list" aria-label="Hábitos de hoje">
            {habits.map((habit) => (
                <HabitCard
                    key={habit.id}
                    title={habit.title}
                    goal={habit.goal}
                    completed={habit.completed}
                />
            ))}
        </section>
    );
}
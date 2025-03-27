export default function Section({ id, title, children }) {
    return (
      <section id={id} className="min-h-screen flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        {children}
      </section>
    );
  }
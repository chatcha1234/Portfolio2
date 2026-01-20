const Skills = () => {
  const customSkills = [
    {
      category: "Frontend",
      items: [
        "HTML/CSS",
        "JavaScript (ES6+)",
        "React.js",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
    { category: "Backend", items: ["Node.js", "Express", "SQL", "REST APIs"] },
    {
      category: "Tools & DevOps",
      items: ["Git", "Docker", "VS Code", "Figma", "Agile"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customSkills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-card-bg p-8 rounded-xl border border-slate-700 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {skillGroup.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

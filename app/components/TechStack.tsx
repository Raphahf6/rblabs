import { Cpu, Globe, Database, Cloud } from 'lucide-react';

export default function TechStack() {
  const stacks = [
    {
      category: "Front-end & Mobile",
      icon: <Globe size={24} className="text-blue-400" />,
      techs: ["React.js", "Next.js 14", "Tailwind CSS", "React Native"]
    },
    {
      category: "Back-end & API",
      icon: <Cpu size={24} className="text-purple-400" />,
      techs: ["Python", "Node.js", "FastAPI", "GraphQL"]
    },
    {
      category: "Banco de Dados",
      icon: <Database size={24} className="text-emerald-400" />,
      techs: ["PostgreSQL", "Supabase", "Firebase", "MongoDB"]
    },
    {
      category: "Infra & AI",
      icon: <Cloud size={24} className="text-orange-400" />,
      techs: ["AWS", "Vercel", "OpenAI API", "Docker"]
    }
  ];

  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Arquitetura Moderna e Escalável</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Não usamos tecnologias obsoletas. Seus sistemas são construídos com a mesma stack 
            utilizada pelas maiores startups do Vale do Silício, garantindo velocidade e segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stacks.map((stack, idx) => (
            <div key={idx} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-900 rounded-lg border border-slate-700">
                  {stack.icon}
                </div>
                <h3 className="font-bold text-lg">{stack.category}</h3>
              </div>
              <ul className="space-y-3">
                {stack.techs.map((tech, tIdx) => (
                  <li key={tIdx} className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
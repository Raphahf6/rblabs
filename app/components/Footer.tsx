import { Code2, Github, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Marca */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white">
                <Code2 size={20} />
              </div>
              R&B Labs
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Software House especializada em sistemas corporativos sob medida. 
              Transformamos processos manuais em ativos digitais de alto valor.
            </p>
            <div className="flex gap-4">
              {/* Links sociais (atualize com seus links reais) */}
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#inicio" className="hover:text-blue-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#cases" className="hover:text-blue-500 transition-colors">Casos de Sucesso</a></li>
              <li><a href="#metodologia" className="hover:text-blue-500 transition-colors">Metodologia</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col">
                <span className="text-slate-500 text-xs">Comercial</span>
                <a href="mailto:contato@rblabs.com.br" className="hover:text-blue-500 text-white">contato@rblabs.com.br</a>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500 text-xs">WhatsApp</span>
                <a href="https://wa.me/5511936200327" className="hover:text-blue-500 text-white">+55 (11) 93620-0327</a>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500 text-xs">Localização</span>
                <span className="text-white">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; {currentYear} R&B Labs Enterprise Solutions. Todos os direitos reservados.</p>
         
        </div>
      </div>
    </footer>
  );
}
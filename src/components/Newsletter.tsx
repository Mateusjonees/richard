import { useState } from "react";
import { Mail, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Por favor, insira um email válido");
      return;
    }

    try {
      // Here you would integrate with Mailchimp, ConvertKit, etc.
      // For now, we'll just simulate success
      console.log("Newsletter signup:", email);
      setSubmitted(true);
      setEmail("");

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Erro ao inscrever. Tente novamente.");
    }
  };

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container px-4 md:px-6 max-w-2xl">
        <div className="flex gap-4 mb-6">
          <Mail className="w-8 h-8 flex-shrink-0" />
          <div>
            <h2 className="text-3xl font-bold mb-2">Dicas Jurídicas Semanais</h2>
            <p className="text-blue-100">
              Receba artigos, novidades jurídicas e dicas práticas direto no seu email. Sem spam, apenas conteúdo de valor.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              disabled={submitted}
            />
            <button
              type="submit"
              disabled={submitted}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors disabled:opacity-75 whitespace-nowrap flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4" />
                  Inscrito!
                </>
              ) : (
                "Inscrever"
              )}
            </button>
          </div>

          {error && <p className="text-red-200 text-sm">{error}</p>}
          {submitted && (
            <p className="text-blue-100 text-sm">
              ✓ Verifique seu email para confirmar a inscrição
            </p>
          )}
        </form>

        <p className="text-xs text-blue-200 mt-4">
          Respeitamos sua privacidade. Cancelar inscrição a qualquer momento.
        </p>
      </div>
    </section>
  );
}

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xxxxxx"
      method="POST"
      className="space-y-5"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-1.5">
          Adınız Soyadınız
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 text-sm placeholder:text-muted-foreground"
          placeholder="Adınız ve soyadınız"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-1.5">
          Telefon Numaranız
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 text-sm placeholder:text-muted-foreground"
          placeholder="05XX XXX XX XX"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-1.5">
          Mesajınız
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 text-sm placeholder:text-muted-foreground resize-none"
          placeholder="İhtiyacınız olan makine ve çalışma detaylarını yazın..."
        />
      </div>
      <button
        type="submit"
        className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-sm shadow-accent/20 text-sm"
      >
        Gönder
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </button>
    </form>
  )
}
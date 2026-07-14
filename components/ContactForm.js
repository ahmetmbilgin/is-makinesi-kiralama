import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState("idle")

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("sending")

    try {
      const form = e.target
      const data = new FormData(form)

      const res = await fetch("https://formspree.io/f/xxxxxx", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12 px-6 bg-green-50 border border-green-200 rounded-2xl">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-heading font-semibold text-lg text-green-800 mb-2">Mesajınız Gönderildi!</h3>
        <p className="text-green-700 text-sm mb-4">En kısa sürede size dönüş yapacağız.</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-green-600 hover:text-green-800 underline underline-offset-2"
        >
          Yeni mesaj gönder
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 select-none">
      {status === "error" && (
        <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
          Bir hata oluştu. Lütfen tekrar deneyin veya bizi doğrudan arayın.
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-1.5">
          Adınız Soyadınız
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          pattern="[A-Za-zçğıöşüÇĞİÖŞÜ ]+"
          title="Geçerli bir isim girin"
          autoComplete="name"
          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 text-sm placeholder:text-muted-foreground select-text"
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
          defaultValue=""
          pattern="[0-9]{10}"
          maxLength={10}
          inputMode="numeric"
          title="Geçerli bir telefon numarası girin"
          autoComplete="tel"
          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 text-sm placeholder:text-muted-foreground select-text"
          placeholder="(532) 123 45 67"
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
          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 text-sm placeholder:text-muted-foreground resize-none select-text"
          placeholder="İhtiyacınız olan makine ve çalışma detaylarını yazın..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-sm shadow-accent/20 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Gönderiliyor...
          </>
        ) : (
          <>
            Gönder
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}

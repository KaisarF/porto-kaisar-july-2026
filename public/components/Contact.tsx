interface ContactProps {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

export default function Contact({ email, phone, linkedin, location }: ContactProps) {
  const contactItems = [
    {
      icon: 'ti-map-pin',
      label: 'Lokasi',
      value: location,
      colorClass: 'bg-emerald-50 text-emerald-700',
    },
    {
      icon: 'ti-mail',
      label: 'Email',
      href: `mailto:${email}`,
      value: email,
      colorClass: 'bg-blue-50 text-blue-700',
    },
    {
      icon: 'ti-phone',
      label: 'Telepon',
      href: `tel:${phone}`,
      value: phone,
      colorClass: 'bg-amber-50 text-amber-700',
    },
    {
      icon: 'ti-brand-linkedin',
      label: 'LinkedIn',
      href: `https://${linkedin}`,
      value: 'Kunjungi Profil →',
      colorClass: 'bg-violet-50 text-violet-700',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
          Kontak & Biodata
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:border-foreground/30 hover:-translate-y-0.5 transition-all"
            >
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${item.colorClass}`}>
                <i className={`ti ${item.icon} text-xl`} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} className="font-semibold text-foreground hover:underline hover:text-blue-500 transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="font-semibold text-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
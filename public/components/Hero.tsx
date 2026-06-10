

interface HeroProps {
  name: string;
  title: string;
  description: string;
  profileImage: string;
}
import kaisar from '../../src/assets/kaisar.jpg';
export default function Hero({
  name,
  title,
  description,
  profileImage,
}: HeroProps) {
  return (
    <section className="min-h-screen bg-linear-to-br from-background via-background to-secondary flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                {name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                {title}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#experience"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Lihat Pengalaman
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-accent rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-secondary border-4 border-accent shadow-2xl">
                <img
                  src={profileImage || kaisar}
                  alt={name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

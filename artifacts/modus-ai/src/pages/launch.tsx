import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { trackViewContent, trackButtonClick } from "@/lib/tiktok";
import {
  useSeo,
  breadcrumbSchema,
  imageObjectSchema,
  CEREMONY_IMAGE_URL,
  SIGNING_IMAGE_URL,
} from "@/lib/seo";
import {
  LAUNCH_I18N,
  LAUNCH_PATH,
  ceremonyImageSrc,
  signingImageSrc,
  launchFeatureImageSrc,
  CEREMONY_IMAGE_W,
  CEREMONY_IMAGE_H,
  LAUNCH_FEATURE_IMAGE_W,
  LAUNCH_FEATURE_IMAGE_H,
} from "@/data/launch";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Launch() {
  const { lang } = useLang();
  const li = LAUNCH_I18N[lang];
  const p = li.page;

  useSeo({
    title: p.metaTitle,
    description: p.metaDescription,
    path: LAUNCH_PATH,
    image: CEREMONY_IMAGE_URL,
    imageAlt: li.imageAlt,
    type: "article",
    jsonLd: [
      breadcrumbSchema([
        { name: p.breadcrumbHome, path: "/" },
        { name: p.breadcrumbCurrent, path: LAUNCH_PATH },
      ]),
      imageObjectSchema({
        url: CEREMONY_IMAGE_URL,
        caption: li.imageCaption,
        width: CEREMONY_IMAGE_W,
        height: CEREMONY_IMAGE_H,
      }),
      imageObjectSchema({
        url: SIGNING_IMAGE_URL,
        caption: li.signingCaption,
      }),
    ],
  });

  useEffect(() => {
    trackViewContent({
      contentId: "official-launch",
      contentName: "Official Launch — 8th Governor of Penang",
      contentType: "service",
    });
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ceremonyImageSrc()}
            alt={li.imageAlt}
            title={li.imageTitle}
            width={CEREMONY_IMAGE_W}
            height={CEREMONY_IMAGE_H}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/88 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-colors"
                  data-testid="breadcrumb-home"
                >
                  {p.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="text-primary font-medium" aria-current="page">
                {p.breadcrumbCurrent}
              </li>
            </ol>
          </nav>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide">
              <Award className="w-4 h-4" />
              {p.breadcrumbCurrent}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white mb-5">
              {p.title}
            </h1>
            <p className="text-primary/90 text-lg md:text-xl font-medium mb-5">
              {p.subtitle}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              {p.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured image ── */}
      <section className="relative z-10 pb-4">
        <div className="container mx-auto px-4 md:px-8">
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-primary/20 bg-card shadow-2xl m-0"
          >
            <img
              src={launchFeatureImageSrc()}
              alt={li.signingAlt}
              title={li.imageTitle}
              width={LAUNCH_FEATURE_IMAGE_W}
              height={LAUNCH_FEATURE_IMAGE_H}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover"
            />
            <figcaption className="px-6 py-4 text-center text-sm md:text-base text-muted-foreground border-t border-primary/20 bg-gradient-to-b from-primary/5 to-transparent">
              {li.imageCaption}
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-1 w-10 bg-primary rounded-full" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                {p.overviewTitle}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {p.overviewBody}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="py-16 md:py-20 bg-card border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
            {p.highlightsTitle}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {p.highlights.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 p-5 rounded-xl bg-background border border-white/5"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
            {p.galleryTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <figure className="rounded-2xl overflow-hidden border border-white/10 bg-card m-0">
              <img
                src={ceremonyImageSrc()}
                alt={li.imageAlt}
                title={li.imageTitle}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover"
              />
              <figcaption className="px-4 py-3 text-sm text-muted-foreground border-t border-white/10">
                {li.imageCaption}
              </figcaption>
            </figure>
            <figure className="rounded-2xl overflow-hidden border border-white/10 bg-card m-0">
              <img
                src={signingImageSrc()}
                alt={li.signingAlt}
                title={li.signingCaption}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover"
              />
              <figcaption className="px-4 py-3 text-sm text-muted-foreground border-t border-white/10">
                {li.signingCaption}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Partnership significance ── */}
      <section className="py-16 md:py-20 bg-card border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-1 w-10 bg-primary rounded-full" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              {p.partnershipTitle}
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {p.partnershipBody}
          </p>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-1 w-10 bg-primary rounded-full" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              {p.aboutTitle}
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            {p.aboutBody}
          </p>
          <Link
            href="/details"
            onClick={() =>
              trackButtonClick({
                contentId: "launch-explore-programmes",
                contentName: "Explore Our Programmes",
                contentType: "service",
              })
            }
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            data-testid="launch-explore-link"
          >
            {p.exploreCta}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background via-card to-background border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            {p.ctaTitle}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            {p.ctaBody}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/details"
              onClick={() =>
                trackButtonClick({
                  contentId: "launch-cta-start",
                  contentName: "Start Your AI Transformation",
                  contentType: "lead",
                })
              }
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg bg-gradient-to-r from-primary to-secondary text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,158,46,0.6)]"
              data-testid="launch-cta-start"
            >
              {p.ctaButton}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg border border-primary/40 bg-white/5 text-white transition-all duration-300 hover:bg-white/10 hover:border-primary/70"
              data-testid="launch-back-home"
            >
              <ArrowLeft className="w-5 h-5" />
              {p.backHome}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

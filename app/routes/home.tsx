import { json } from "@remix-run/node";
import type { Route } from "./+types/home";
import { useLoaderData } from "react-router";

export function meta({}: Route.MetaArgs) {
  const title =
    "Terra Finance Edu | Learn Personal Finance with Clear Lessons and Tools";
  const description =
    "Learn personal finance step by step. Terra Finance Edu teaches budgeting, saving, credit, investing, and taxes with clear lessons, interactive labs, and simple tools.";
  const url = "https://terrafinanceedu.com/";
  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "personal finance education, budgeting basics, saving money, credit score explained, beginner investing, financial literacy, finance lessons, money tools, compound interest calculator",
    },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: `${url}og-image.jpg` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    // Fintech-modern theme color (dark navy)
    { name: "theme-color", content: "#0B1B2B" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return json({
    message: context.VALUE_FROM_EXPRESS,
    nowISO: new Date().toISOString(),
  });
}

export default function Home({}: Route.ComponentProps) {
  const { message, nowISO } = useLoaderData<typeof loader>();

  const faqs = [
    {
      q: "What is Terra Finance Edu?",
      a: "An approachable learning site for personal finance. Start with budgeting and saving, then build confidence in credit, investing, and taxes using clear lessons, interactive labs, and simple tools.",
    },
    {
      q: "Who is it for?",
      a: "Students, young professionals, parents, and teachers who want practical, beginner-friendly financial literacy with short lessons and hands-on practice.",
    },
    {
      q: "Are the learning resources free?",
      a: "Core lessons, labs, and tools start free. Printable resources and extended modules may be added later.",
    },
    {
      q: "What should I learn first?",
      a: "Begin with Budgeting Basics and Emergency Funds, then explore Credit Score Essentials and our Interest & Growth explainer.",
    },
    {
      q: "Do you have calculators and planners?",
      a: "Yes. Use the Budget Planner, Compound Interest Calculator, and Debt Payoff Helper to apply lessons right away.",
    },
  ];

  // Structured data: Website, Organization, FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Terra Finance Edu",
        url: "https://terrafinanceedu.com/",
        description:
          "Learn personal finance step by step. Budgeting, saving, credit, investing, and taxes with clear lessons, interactive labs, and simple tools.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://terrafinanceedu.com/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "Terra Finance Edu",
        url: "https://terrafinanceedu.com/",
        logo: "https://terrafinanceedu.com/logo.png",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  const topics = [
    { t: "Budgeting Basics", href: "/" },
    { t: "Saving and Goals", href: "/" },
    { t: "Credit Score Essentials", href: "/" },
    { t: "Investing 101", href: "/" },
    { t: "Banking Smart", href: "/" },
    { t: "Taxes Simplified", href: "/" },
  ];

  const labs = [
    {
      t: "Budgeting Exercise",
      d: "Sort needs and wants, plan a month, and set a savings target.",
      href: "/",
    },
    {
      t: "Interest & Growth Demo",
      d: "See simple vs compound interest and monthly contributions in action.",
      href: "/",
    },
  ];

  const tools = [
    {
      t: "Budget Planner",
      d: "Track income, fixed costs, and flexible spending with savings goals.",
      href: "/",
    },
    {
      t: "Compound Interest Calculator",
      d: "Compare scenarios by rate, time, and contributions. Export results.",
      href: "/",
    },
    {
      t: "Debt Payoff Helper",
      d: "Snowball vs avalanche with timeline previews to reduce interest.",
      href: "/",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Announcement */}
      <div className="w-full border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-2 text-sm text-slate-700">
          New modules arriving soon. Last updated{" "}
          {new Date(nowISO).toLocaleDateString()}.
        </div>
      </div>

      {/* HERO — Dark fintech band */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#0B1B2B]">
        {/* soft gradient blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-32 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #27E0C4 0%, rgba(39,224,196,0) 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-32 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #7CD4FD 0%, rgba(124,212,253,0) 70%)",
          }}
        />

        <div className="mx-auto max-w-6xl px-4 pt-14 pb-12">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                Learn personal finance with{" "}
                <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-white bg-clip-text text-transparent">
                  clear lessons & tools
                </span>
              </h1>
              <p className="mt-4 text-lg text-slate-200">
                Step-by-step budgeting, saving, credit, investing, and taxes.
                Short lessons, interactive labs, and simple calculators. Easy to
                read and friendly for beginners, useful in classrooms.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/"
                  className="inline-flex items-center rounded-xl bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-teal-300"
                >
                  Start learning
                </a>
                <a
                  href="/"
                  className="inline-flex items-center rounded-xl border border-teal-300 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-teal-300"
                >
                  Try an interactive lab
                </a>
                <a
                  href="/"
                  className="inline-flex items-center rounded-xl border border-slate-500/60 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  Use free tools
                </a>
              </div>
            </div>

            {/* Quick Start Card */}
            <div className="w-full max-w-md">
              <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-5 backdrop-blur">
                <h2 className="text-sm font-semibold text-teal-200">
                  Quick start checklist
                </h2>
                <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-slate-200">
                  <li>Pick a budget method that fits your month</li>
                  <li>Set an emergency fund target</li>
                  <li>Preview interest growth in 60 seconds</li>
                </ol>
                <p className="mt-2 text-xs text-slate-400">
                  Start small. Build momentum weekly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars: Learn / Practice / Tools */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              t: "Learn",
              d: "Plain-language lessons with checklists and examples.",
              href: "/",
            },
            {
              t: "Practice",
              d: "Interactive labs to reinforce skills with focused exercises.",
              href: "/",
            },
            {
              t: "Tools",
              d: "Simple calculators and planners to apply what you learn.",
              href: "/",
            },
          ].map((c) => (
            <a
              key={c.t}
              href={c.href}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">{c.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.d}</p>
              <div className="mt-3 text-xs font-semibold text-teal-600 group-hover:translate-x-0.5 transition">
                Explore →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Topics */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Start with core topics
        </h2>
        <p className="mt-2 text-slate-700">
          Build a foundation in budgeting, saving, credit, and investing. Each
          topic links to a guided path.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((x) => (
            <a
              key={x.t}
              href={x.href}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">{x.t}</h3>
              <p className="mt-2 text-sm text-slate-700">
                Read the overview, follow a checklist, and take a short quiz.
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Interactive Labs */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-900">Interactive labs</h2>
        <p className="mt-2 text-slate-700">
          Hands-on practice that turns concepts into skills. Designed for quick
          wins and classroom use.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {labs.map((x) => (
            <a
              key={x.t}
              href={x.href}
              className="rounded-2xl border border-teal-200 bg-teal-50 p-5 shadow-sm transition hover:bg-teal-100"
            >
              <h3 className="text-base font-semibold text-[#0B1B2B]">{x.t}</h3>
              <p className="mt-2 text-sm text-slate-800">{x.d}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Tools & Calculators */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Tools and calculators
        </h2>
        <p className="mt-2 text-slate-700">
          Apply what you learn with simple, reliable calculators and planners.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {tools.map((x) => (
            <a
              key={x.t}
              href={x.href}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">{x.t}</h3>
              <p className="mt-2 text-sm text-slate-700">{x.d}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Who We Help */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900">Who we help</h2>
        <p className="mt-3 text-slate-700">
          Finance can feel overwhelming. We make it approachable for anyone
          learning money basics.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              t: "Students & young adults",
              d: "Build early habits and learn how banking, savings, and credit work in real life.",
            },
            {
              t: "Busy adults",
              d: "Understand key decisions, reduce stress, and take confident steps with money.",
            },
            {
              t: "Parents & teachers",
              d: "Use classroom-friendly lessons and hands-on practice to teach financial literacy.",
            },
          ].map((x) => (
            <article
              key={x.t}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">{x.t}</h3>
              <p className="mt-2 text-sm text-slate-700">{x.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why It Works */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-slate-900">Why it works</h2>
        <p className="mt-3 text-slate-700">
          A clear path helps you build confidence with money, even if you’re
          starting from zero.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-slate-800">
          <li>Plain-language lessons with step-by-step guidance</li>
          <li>Hands-on practice that turns concepts into real skills</li>
          <li>Tools that help you take action immediately</li>
          <li>Short sessions and steady weekly progress</li>
        </ul>
      </section>

      {/* Social Proof Badges */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <div>
              <div className="text-3xl font-extrabold text-[#0B1B2B]">
                Practical
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Action steps you can use today
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-teal-600">
                Understandable
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Plain language and real examples
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#0B1B2B]">
                Flexible
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Short sessions and steady progress
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-2xl border border-[#0B1B2B] bg-[#0B1B2B] p-6 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-white">
                Start learning money skills
              </h2>
              <p className="mt-1 text-sm text-slate-200">
                Follow a lesson, try a lab, and use one tool this week.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/"
                className="rounded-xl bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                Go to lessons
              </a>
              <a
                href="/"
                className="rounded-xl border border-teal-300 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                Open tools
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((f) => (
            <details key={f.q} className="group open:bg-slate-50">
              <summary className="cursor-pointer list-none px-5 py-4 font-medium">
                {f.q}
              </summary>
              <div className="px-5 pb-5 text-slate-700">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-700">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>© {new Date().getFullYear()} Terra Finance Edu</div>
            <div className="text-slate-500">
              {message ? (
                <span aria-live="polite">{message}</span>
              ) : (
                <span>Clear personal finance education</span>
              )}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

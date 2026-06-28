'use client';

import { useState, useEffect, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Calendar, Clock, Target, Code2, Server, Database, Boxes, Zap, Trophy,
  ChevronRight, CheckCircle2, Circle, BookOpen, Briefcase, TrendingUp,
  Sparkles, Brain, GitBranch, Cpu, Rocket, Award, Flame, Terminal, HelpCircle, ListChecks
} from 'lucide-react';
import { phases, days, companyPatterns, dsaPatterns, DayPlan } from '@/data/roadmap';
import { getDayExtras } from '@/data/questions';
import { useToast } from '@/hooks/use-toast';

const STORAGE_KEY = 'roadmap-progress-v1';

const blockIcon = {
  'dsa': Code2,
  'theory': BookOpen,
  'system-design': Server,
  'devops': Boxes,
  'java': Cpu,
  'revision': Sparkles,
  'mock': Trophy,
};

const blockColor = {
  'dsa': 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/50',
  'theory': 'text-violet-600 bg-violet-50 dark:text-violet-400 dark:bg-violet-950/50',
  'system-design': 'text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-950/50',
  'devops': 'text-cyan-600 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-950/50',
  'java': 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-950/50',
  'revision': 'text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-950/50',
  'mock': 'text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-950/50',
};

const difficultyColor: Record<string, string> = {
  'Easy': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
  'Medium': 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400',
  'Hard': 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400',
};

export default function Home() {
  const [activePhase, setActivePhase] = useState<number>(1);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [hydrated, setHydrated] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const next = saved ? new Set<number>(JSON.parse(saved)) : new Set<number>();
      setCompleted(next);
    } catch {
      // ignore
    } finally {
      setHydrated(true);
    }
  }, []);

  const toggleDay = (day: number) => {
    setCompleted(prev => {
      const next = new Set(prev);
      if (next.has(day)) {
        next.delete(day);
      } else {
        next.add(day);
        toast({ title: `Day ${day} complete`, description: 'Keep the streak alive.' });
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  };

  const progressPct = useMemo(() => Math.round((completed.size / 80) * 100), [completed]);
  const phaseDays = (p: number) => days.filter(d => d.phase === p);
  const currentDay = useMemo(() => {
    for (let i = 1; i <= 80; i++) if (!completed.has(i)) return i;
    return 80;
  }, [completed]);

  const totalProblems = dsaPatterns.reduce((a, b) => a + b.count, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* HERO */}
      <header className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-rose-500/10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 border-emerald-500/20">
              <Flame className="w-3 h-3 mr-1" /> 80-Day Sprint
            </Badge>
            <Badge variant="outline" className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
              4 hrs/day
            </Badge>
            <Badge variant="outline" className="border-rose-500/30 text-rose-600 dark:text-rose-400">
              <Trophy className="w-3 h-3 mr-1" /> Target: 30+ LPA
            </Badge>
            <Badge variant="outline" className="border-violet-500/30 text-violet-600 dark:text-violet-400">
              Senior SDE / L5
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
            Crack FAANG &amp; Top Product Companies
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl">
            A day-wise study roadmap for a Java + SpringBoot + DevOps/K8s engineer with 5 YOE.
            Curated DSA patterns, system design, and company-specific prep to land your next{' '}
            <span className="font-semibold text-foreground">30 LPA+ offer</span>.
          </p>

          {/* Progress strip */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <StatCard icon={Calendar} label="Day Progress" value={`${completed.size}/80`} sub={`Day ${currentDay} next`} accent="emerald" />
            <StatCard icon={Target} label="Completion" value={`${progressPct}%`} sub={`${80 - completed.size} days left`} accent="teal" />
            <StatCard icon={Code2} label="DSA Problems" value={`${totalProblems}+`} sub="across 18 patterns" accent="rose" />
            <StatCard icon={Briefcase} label="Target Companies" value="6+" sub="Nike, Flipkart, FAANG..." accent="violet" />
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-muted-foreground">{progressPct}%</span>
            </div>
            <Progress value={progressPct} className="h-3" />
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Tabs value={String(activePhase)} onValueChange={(v) => setActivePhase(Number(v))} className="space-y-6">
          {/* Phase selector */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <TabsList className="inline-flex h-auto p-1 bg-muted/50">
                {phases.map(p => {
                  const phaseDone = phaseDays(p.id).every(d => completed.has(d.day));
                  const phasePartial = phaseDays(p.id).some(d => completed.has(d.day));
                  return (
                    <TabsTrigger
                      key={p.id}
                      value={String(p.id)}
                      className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: phaseDone ? '#10b981' : p.accent }}
                      />
                      <span className="text-xs sm:text-sm">Phase {p.id}</span>
                      {phaseDone && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                      {!phaseDone && phasePartial && <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </ScrollArea>
          </div>

          {/* Phase panels */}
          {phases.map(phase => {
            const pDays = phaseDays(phase.id);
            const doneCount = pDays.filter(d => completed.has(d.day)).length;
            const pct = Math.round((doneCount / pDays.length) * 100);
            return (
              <TabsContent key={phase.id} value={String(phase.id)} className="space-y-6 mt-0">
                <PhaseHeader phase={phase} doneCount={doneCount} totalCount={pDays.length} pct={pct} />

                <div className="grid gap-4">
                  {pDays.map(day => (
                    <DayCard
                      key={day.day}
                      day={day}
                      isDone={completed.has(day.day)}
                      onToggle={() => toggleDay(day.day)}
                      accent={phase.accent}
                    />
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* DSA Patterns Heatmap */}
        <section className="mt-16">
          <SectionHeader
            icon={Brain}
            title="DSA Pattern Coverage"
            subtitle="The 18 patterns that cover 95% of interview questions"
            accent="emerald"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {dsaPatterns.map(p => {
              const max = Math.max(...dsaPatterns.map(x => x.count));
              const intensity = p.count / max;
              return (
                <Card key={p.name} className="p-3 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground">Phase {p.phase}</span>
                    <span className="text-xs font-bold" style={{ color: phases[p.phase - 1].accent }}>
                      {p.count}
                    </span>
                  </div>
                  <div className="text-sm font-semibold leading-tight">{p.name}</div>
                  <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${intensity * 100}%`, backgroundColor: phases[p.phase - 1].accent }}
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Company patterns */}
        <section className="mt-16">
          <SectionHeader
            icon={Briefcase}
            title="Company-Specific Interview Patterns"
            subtitle="What to expect from each target company"
            accent="rose"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {companyPatterns.map(c => (
              <Card key={c.name} className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.accent }} />
                      {c.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.role}</p>
                  </div>
                  <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 border-0">
                    <TrendingUp className="w-3 h-3 mr-1" /> {c.salary}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="text-xs font-medium text-muted-foreground min-w-16">Rounds:</span>
                    <span className="text-xs">{c.rounds}</span>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">Focus areas:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {c.focus.map(f => (
                        <Badge key={f} variant="secondary" className="text-xs font-normal">
                          {f}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t mt-3">{c.notes}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Strategy callouts */}
        <section className="mt-16">
          <SectionHeader
            icon={Rocket}
            title="Strategy &amp; Tips"
            subtitle="Maximise every one of those 4 hours"
            accent="violet"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <CalloutCard
              icon={Clock}
              title="Daily 4-Hour Structure"
              items={[
                '90 min — DSA practice (2-3 problems, time-boxed)',
                '60 min — Theory / concept learning',
                '60 min — System design OR tech deep dive',
                '30 min — Revision, Anki, mistake journal',
              ]}
            />
            <CalloutCard
              icon={Trophy}
              title="Leverage Your 5 YOE"
              items={[
                'For Java/Spring/DevOps rounds: you have depth. Use it.',
                'For DSA: humble yourself — solve Easy first, no shortcuts.',
                'For System Design: bring real war stories from production.',
                'For behavioural: quantify every project (RPS, latency, $ saved).',
              ]}
            />
            <CalloutCard
              icon={Flame}
              title="Streak Rules"
              items={[
                'Never skip 2 days in a row. Period.',
                'If sick: do just the 30-min revision block to keep the streak.',
                'Take Sundays lighter if needed — but solve at least 1 DSA problem.',
                'Track your contest rating weekly — rising rating = on track.',
              ]}
            />
            <CalloutCard
              icon={Award}
              title="30 LPA Negotiation Levers"
              items={[
                'Multiple offers are the #1 lever — interview at 6+ companies.',
                'Use levels.fyi to know the real band per company/level.',
                'Counter with a competing offer in writing, not verbally.',
                'Equity/RSU is real money — negotiate vesting cliff & refreshers.',
              ]}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t pt-8 pb-4 text-center text-sm text-muted-foreground">
          <p>Built for senior Java/Spring/DevOps engineers targeting FAANG &amp; top product companies.</p>
          <p className="mt-1">Track your progress here — it saves to your browser automatically.</p>
        </footer>
      </main>
    </div>
  );
}

/* ----------------- Helper components ----------------- */

function StatCard({ icon: Icon, label, value, sub, accent }: {
  icon: any; label: string; value: string; sub: string; accent: string;
}) {
  const accents: Record<string, string> = {
    emerald: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10',
    teal: 'text-teal-600 dark:text-teal-400 bg-teal-500/10',
    rose: 'text-rose-600 dark:text-rose-400 bg-rose-500/10',
    violet: 'text-violet-600 dark:text-violet-400 bg-violet-500/10',
  };
  return (
    <Card className="p-4 sm:p-5 relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-30 ${accents[accent]}`} />
      <div className="relative">
        <div className={`inline-flex p-2 rounded-lg ${accents[accent]} mb-2`}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="text-2xl sm:text-3xl font-bold tracking-tight">{value}</div>
        <div className="text-xs font-medium text-foreground/80 mt-1">{label}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </Card>
  );
}

function PhaseHeader({ phase, doneCount, totalCount, pct }: {
  phase: typeof phases[0]; doneCount: number; totalCount: number; pct: number;
}) {
  return (
    <Card className="p-6 border-l-4" style={{ borderLeftColor: phase.accent }}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="outline" className="text-xs" style={{ color: phase.accent, borderColor: phase.accent }}>
              {phase.dayRange}
            </Badge>
            <span className="text-xs text-muted-foreground italic">{phase.subtitle}</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight">{phase.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-3xl">{phase.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {phase.outcomes.map(o => (
              <Badge key={o} variant="secondary" className="text-xs font-normal py-1">
                <CheckCircle2 className="w-3 h-3 mr-1" style={{ color: phase.accent }} />
                {o}
              </Badge>
            ))}
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-3xl font-bold" style={{ color: phase.accent }}>{pct}%</div>
          <div className="text-xs text-muted-foreground">{doneCount} / {totalCount} days</div>
        </div>
      </div>
      <Progress value={pct} className="h-1.5 mt-4" style={{ color: phase.accent } as any} />
    </Card>
  );
}

function DayCard({ day, isDone, onToggle, accent }: {
  day: DayPlan; isDone: boolean; onToggle: () => void; accent: string;
}) {
  const extras = getDayExtras(day.day);
  return (
    <Card className={`overflow-hidden transition-all ${isDone ? 'opacity-70' : ''}`}>
      <Accordion type="single" collapsible>
        <AccordionItem value={`day-${day.day}`} className="border-0">
          <div className="flex items-stretch">
            {/* Day number strip */}
            <button
              onClick={onToggle}
              className="w-14 sm:w-16 shrink-0 flex flex-col items-center justify-center border-r hover:bg-muted/50 transition-colors cursor-pointer"
              style={{ backgroundColor: isDone ? accent : 'transparent' }}
              aria-label={isDone ? 'Mark incomplete' : 'Mark complete'}
            >
              <div className={`text-[10px] font-medium ${isDone ? 'text-white/80' : 'text-muted-foreground'}`}>DAY</div>
              <div className={`text-2xl font-bold ${isDone ? 'text-white' : ''}`}>{day.day}</div>
              {isDone ? (
                <CheckCircle2 className="w-4 h-4 text-white mt-0.5" />
              ) : (
                <Circle className="w-4 h-4 text-muted-foreground mt-0.5" />
              )}
            </button>

            <div className="flex-1 min-w-0">
              <AccordionTrigger className="hover:no-underline px-4 py-3 sm:px-5 sm:py-4">
                <div className="text-left flex-1 min-w-0 pr-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className={`font-semibold text-sm sm:text-base ${isDone ? 'line-through text-muted-foreground' : ''}`}>
                      {day.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">{day.focus}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {day.blocks.map((b, i) => {
                      const Icon = blockIcon[b.type];
                      return (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded ${blockColor[b.type]}`}
                          title={`${b.label} — ${b.time}`}
                        >
                          <Icon className="w-2.5 h-2.5" />
                          {b.time}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 sm:px-5 sm:pb-5">
                {/* Time blocks */}
                <div className="grid sm:grid-cols-2 gap-3 mt-2">
                  {day.blocks.map((b, i) => {
                    const Icon = blockIcon[b.type];
                    return (
                      <div key={i} className={`p-3 rounded-lg border ${blockColor[b.type]} border-current/10`}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <Icon className="w-3.5 h-3.5" />
                            <span className="text-xs font-semibold uppercase tracking-wide">{b.label}</span>
                          </div>
                          <span className="text-[10px] font-mono opacity-70">{b.time}</span>
                        </div>
                        <p className="text-xs leading-relaxed text-foreground/90">{b.detail}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Problems */}
                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-1">
                    <Code2 className="w-3 h-3" /> LeetCode Problems
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {day.problems.map((p, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className={`text-xs font-normal ${difficultyColor[p.difficulty]}`}
                      >
                        {p.name} <span className="opacity-50 ml-1">· {p.platform}</span>
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Practice Programs (code to write today) */}
                {extras.practicePrograms.length > 0 && (
                  <div className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      Code Today — Practice Programs
                      <Badge variant="secondary" className="ml-auto text-[10px] font-normal py-0">
                        {extras.practicePrograms.length} tasks
                      </Badge>
                    </h4>
                    <ol className="space-y-2">
                      {extras.practicePrograms.map((p, i) => (
                        <li key={i} className="text-xs flex items-start gap-2">
                          <span className="shrink-0 w-5 h-5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[10px] font-bold font-mono">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed text-foreground/90">{p}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Interview Questions */}
                {extras.interviewQuestions.length > 0 && (
                  <div className="mt-3 rounded-lg border border-violet-500/20 bg-violet-500/5 p-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-400 mb-2 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5" />
                      Interview Questions on this Topic
                      <Badge variant="secondary" className="ml-auto text-[10px] font-normal py-0">
                        {extras.interviewQuestions.length} Qs
                      </Badge>
                    </h4>
                    <ol className="space-y-1.5">
                      {extras.interviewQuestions.map((q, i) => (
                        <li key={i} className="text-xs flex items-start gap-2">
                          <span className="shrink-0 text-violet-500 dark:text-violet-400 font-mono text-[10px] mt-0.5">
                            Q{i + 1}.
                          </span>
                          <span className="leading-relaxed text-foreground/90">{q}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Goals */}
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-1">
                      <Target className="w-3 h-3" /> Daily Goals
                    </h4>
                    <ul className="space-y-1">
                      {day.goals.map((g, i) => (
                        <li key={i} className="text-xs flex items-start gap-1.5">
                          <ChevronRight className="w-3 h-3 mt-0.5 shrink-0" style={{ color: accent }} />
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {day.resources.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-1">
                        <BookOpen className="w-3 h-3" /> Resources
                      </h4>
                      <ul className="space-y-1">
                        {day.resources.map((r, i) => (
                          <li key={i}>
                            <a
                              href={r.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                            >
                              <ChevronRight className="w-3 h-3 shrink-0" />
                              {r.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}

function SectionHeader({ icon: Icon, title, subtitle, accent }: {
  icon: any; title: string; subtitle: string; accent: string;
}) {
  const accents: Record<string, string> = {
    emerald: 'text-emerald-600 dark:text-emerald-400',
    rose: 'text-rose-600 dark:text-rose-400',
    violet: 'text-violet-600 dark:text-violet-400',
  };
  return (
    <div className="mb-6">
      <div className={`inline-flex items-center gap-2 ${accents[accent]}`}>
        <Icon className="w-5 h-5" />
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </div>
      <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
    </div>
  );
}

function CalloutCard({ icon: Icon, title, items }: {
  icon: any; title: string; items: string[];
}) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 rounded-lg bg-primary/10">
          <Icon className="w-4 h-4" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm flex items-start gap-2 text-muted-foreground">
            <span className="w-1 h-1 rounded-full bg-foreground/40 mt-2 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

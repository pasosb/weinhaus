'use client'
import { Plus, Minus } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function ImpressumPage() {
    const [isFull, setIsFull] = useState(false)
    return (
        <section className="bg-background min-h-screen pt-12">
            <div className="bg-muted/25 py-16 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mb-12">
                        <Link href="/">
                            <Button variant="outline">← Zurück zur Startseite</Button>
                        </Link>
                    </div>
                    
                    <div className="bg-background ring-foreground/5 relative mx-auto max-w-3xl rounded-3xl border border-transparent p-8 pb-20 shadow ring-1 sm:p-12 sm:pb-24">
                        <Button
                            onClick={() => setIsFull(!isFull)}
                            className="group absolute bottom-8 left-8 z-10 flex pr-2.5 sm:bottom-10 sm:left-12"
                            variant="secondary"
                            size="sm">
                            <span>Lese {isFull ? 'Weniger' : 'Mehr'}</span>
                            {isFull ? (
                                <Minus
                                    strokeWidth={2.5}
                                    className="!size-3.5 opacity-50 duration-300"
                                />
                            ) : (
                                <Plus
                                    strokeWidth={2.5}
                                    className="!size-3.5 opacity-50 duration-300 group-hover:rotate-90"
                                />
                            )}
                        </Button>

                        <motion.div
                            className={cn('relative overflow-hidden', !isFull && 'mask-b-from-45%')}
                            initial={{ height: '22rem' }}
                            animate={{ height: isFull ? 'auto' : '22rem' }}
                            exit={{ height: '22rem' }}>
                            <div className="text-muted-foreground space-y-6 text-base *:leading-relaxed">
                                <div>
                                    <h2 className="text-foreground mb-3 text-2xl font-bold">Impressum</h2>
                                    <h3 className="text-foreground mb-2 text-lg font-semibold">Angaben gem. § 5 TMG:</h3>
                                    <p>
                                        <strong className="text-foreground font-medium">Weinhaus Anneliese Schmitz</strong><br />
                                        Wolfram Franz Schmitz<br />
                                        Am Baumberg 13<br />
                                        58802 Balve<br />
                                        Deutschland
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-foreground mb-2 text-lg font-semibold">Kontaktaufnahme</h3>
                                    <p>
                                        Telefon: <strong className="text-foreground font-medium">+49 2375 4411</strong><br />
                                        Mail: <strong className="text-foreground font-medium">shop@weinhaus-schmitz.de</strong>
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-foreground mb-2 text-lg font-semibold">Umsatzsteuer-ID</h3>
                                    <p>
                                        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: <strong className="text-foreground font-medium">DE200991892</strong>
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-foreground mb-2 text-lg font-semibold">Haftungsausschluss – Disclaimer:</h3>
                                    
                                    <h4 className="text-foreground mt-3 mb-1 font-semibold">Haftung für Inhalte</h4>
                                    <p>
                                        Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                                    </p>
                                    <p className="mt-2">
                                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von den o.g. Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.
                                    </p>

                                    <h4 className="text-foreground mt-3 mb-1 font-semibold">Haftungsbeschränkung für externe Links</h4>
                                    <p>
                                        Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können wir für die „externen Links" auch keine Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der externen Links sind die jeweilige Anbieter oder Betreiber (Urheber) der Seiten verantwortlich.
                                    </p>
                                    <p className="mt-2">
                                        Die externen Links wurden zum Zeitpunkt der Linksetzung auf eventuelle Rechtsverstöße überprüft und waren im Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten. Eine ständige inhaltliche Überprüfung der externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht möglich. Bei direkten oder indirekten Verlinkungen auf die Webseiten Dritter, die außerhalb unseres Verantwortungsbereichs liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall nur bestehen, wenn wir von den Inhalten Kenntnis erlangen und es uns technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
                                    </p>
                                    <p className="mt-2">
                                        Diese Haftungsausschlusserklärung gilt auch innerhalb des eigenen Internetauftrittes gesetzten Links und Verweise von Fragestellern, Blogeinträgern, Gästen des Diskussionsforums. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargestellten Informationen entstehen, haftet allein der Diensteanbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
                                    </p>
                                    <p className="mt-2">
                                        Werden uns Rechtsverletzungen bekannt, werden die externen Links durch uns unverzüglich entfernt.
                                    </p>

                                    <h4 className="text-foreground mt-3 mb-1 font-semibold">Urheberrecht</h4>
                                    <p>
                                        Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d. Urhebergesetzes.
                                    </p>
                                    <p className="mt-2">
                                        Downloads und Kopien dieser Seite sind nur für den privaten und nicht kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite nicht von uns erstellt wurden, sind die Urheberrechte Dritter zu beachten. Die Inhalte Dritter werden als solche kenntlich gemacht. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte unverzüglich entfernen.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

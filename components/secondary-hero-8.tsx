import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Shield, Sparkles, SquareActivity } from 'lucide-react'



export default function HeroSection() {
    return (
        <section className="h-screen w-full flex items-center justify-center">
            <div className="bg-muted w-full h-full flex items-center justify-center py-24">
                <div className="mx-auto max-w-5xl px-6 w-full">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-primary bg-primary/5 border-primary/10 rounded-full border px-2 py-1 text-sm font-medium">Abverkauf</span>
                        <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">Abverkauf von Wein, Spirituosen und Likören.</h1>
                        <p className="text-muted-foreground mb-6 mt-4 text-balance text-lg">Wir schließen unseren Laden vollständig zum 31.12.2025.<br></br> Daher findet am 07.11 und 08.11 ein Abverkauf statt. <br></br> FR 15-19 Uhr. Samstag 10-13 Uhr.</p>

                        <Button asChild>
                            <Link href="https://www.google.com/maps/place/Weinhaus+Anneliese+Schmitz/@51.33419,7.8585851,1383m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47b95b57b57bdf8b:0x6c0f6ffec55bb609!8m2!3d51.33419!4d7.86116!16s%2Fg%2F1tlvnmf9?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D">Routenplaner</Link>
                        </Button>

                        <Button
                            asChild
                            variant="secondary"
                            className="ml-3">
                            <Link href="/impressum">Impressum</Link>
                        </Button>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
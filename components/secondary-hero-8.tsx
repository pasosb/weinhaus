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
                        <p className="text-muted-foreground mb-6 mt-4 text-balance text-lg">Wir schließen unseren Laden vollständig zum 31.12.2025.<br></br> Daher findet am 07.11 und 08.11 ein Abverkauf statt.</p>

                        <Button asChild>
                            <Link href="#link">Routenplaner</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
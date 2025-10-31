'use client'
import { Plus, Minus } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ContentSection() {
    const [isFull, setIsFull] = useState(false)
    return (
        <section className="bg-background">
            <div className="bg-muted/25 py-16 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="bg-background ring-foreground/5 relative mx-auto max-w-2xl rounded-3xl border border-transparent p-8 pb-20 shadow ring-1 sm:p-12 sm:pb-24">
                        <Button
                            onClick={() => setIsFull(!isFull)}
                            className="group absolute bottom-8 left-8 z-10 flex pr-2.5 sm:bottom-10 sm:left-12"
                            variant="secondary"
                            size="sm">
                            <span>Read {isFull ? 'Less' : 'More'}</span>
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
                            <div className="text-muted-foreground space-y-4 text-lg *:leading-relaxed">
                                <p>
                                    I’m honored to be with you today for your commencement from one of the <strong className="text-foreground font-medium">finest universities</strong> in the world. Truth be told, I <strong className="text-foreground font-medium">never graduated from college</strong>. And this is the closest I’ve ever gotten to a college graduation.
                                </p>
                                <p>
                                    Today I want to tell you <strong className="text-foreground font-medium">three stories</strong> from my life. That’s it. No big deal. Just <strong className="text-foreground font-medium">three stories</strong>.
                                </p>
                                <p>
                                    The first story is about <strong className="text-foreground font-medium">connecting the dots</strong>. I dropped out of <strong className="text-foreground font-medium">Reed College</strong> after the first six months, but then stayed around as a <strong className="text-foreground font-medium">drop-in</strong> for another 18 months or so before I really quit. So why’d I drop out?
                                </p>
                                <p>
                                    It started before I was born. My <strong className="text-foreground font-medium">biological mother</strong> was a young, unwed graduate student, and she decided to put me up for <strong className="text-foreground font-medium">adoption</strong>. She felt very strongly that I should be adopted by <strong className="text-foreground font-medium">college graduates</strong>, so everything was all set for me to be adopted at birth by a{' '}
                                    <strong className="text-foreground font-medium">lawyer and his wife</strong>.
                                </p>
                                <p>
                                    Except that when I popped out, they decided at the last minute that they really wanted a <strong className="text-foreground font-medium">girl</strong>. So my parents, who were on a <strong className="text-foreground font-medium">waiting list</strong>, got a call in the middle of the night asking, “We’ve got an <strong className="text-foreground font-medium">unexpected baby boy</strong>. Do you want him?” They said, “
                                    <strong className="text-foreground font-medium">Of course</strong>.”
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
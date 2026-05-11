'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import type { FAQItem } from '@/app/lib/faqs'
import { cardStyles } from '@/app/lib/styles'

type FAQAccordionProps = {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const buttonId = `faq-button-${index}`
        const panelId = `faq-panel-${index}`

        return (
          <div key={item.q} className={`${cardStyles.standard} overflow-hidden p-0`}>
            <h2>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowDown') {
                    event.preventDefault()
                    const next = (index + 1) % items.length
                    document.getElementById(`faq-button-${next}`)?.focus()
                  }
                  if (event.key === 'ArrowUp') {
                    event.preventDefault()
                    const prev = (index - 1 + items.length) % items.length
                    document.getElementById(`faq-button-${prev}`)?.focus()
                  }
                  if (event.key === 'Home') {
                    event.preventDefault()
                    document.getElementById('faq-button-0')?.focus()
                  }
                  if (event.key === 'End') {
                    event.preventDefault()
                    document.getElementById(`faq-button-${items.length - 1}`)?.focus()
                  }
                }}
                className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-gray-50"
              >
                <span className={`text-sm md:text-base font-semibold ${isOpen ? 'text-accent' : 'text-primary'}`}>
                  {item.q}
                </span>
                {isOpen ? (
                  <Minus aria-hidden="true" className="h-5 w-5 text-accent" />
                ) : (
                  <Plus aria-hidden="true" className="h-5 w-5 text-accent" />
                )}
              </button>
            </h2>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid border-t border-gray-100 px-6 transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr] pb-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

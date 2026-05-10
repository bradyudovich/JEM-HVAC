'use client'

import { useState } from 'react'
import type { FAQItem } from '@/app/lib/faqs'

type FAQAccordionProps = {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const buttonId = `faq-button-${index}`
        const panelId = `faq-panel-${index}`

        return (
          <div key={item.q} className="rounded-2xl bg-white shadow-md">
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
                className="flex w-full items-center justify-between rounded-2xl px-6 py-5 text-left text-lg font-semibold text-primary hover:text-accent"
              >
                <span>{item.q}</span>
                <span aria-hidden="true" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>
            </h2>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden px-6">
                <p className="pb-6 text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

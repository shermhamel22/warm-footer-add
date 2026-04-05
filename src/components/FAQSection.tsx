import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What Painting Services Do You Offer?",
    answer:
      "We offer a full range of painting services including interior painting, exterior painting, commercial painting, cabinet refinishing, pressure washing, drywall repair, color consultation, and staining & sealing. Call us today for a free quote!",
  },
  {
    question: "How Quickly Can You Start My Project?",
    answer:
      "We typically begin projects within 1-2 weeks of the estimate approval. For urgent projects, we do our best to accommodate faster timelines.",
  },
  {
    question: "Do You Provide Free Estimates?",
    answer:
      "Yes! We provide free, no-obligation estimates for all painting jobs. Contact us to schedule an appointment and we'll assess the work needed before any costs are incurred.",
  },
  {
    question: "Are Your Painters Licensed And Insured?",
    answer:
      "Absolutely. All of our painters are fully licensed, insured, and experienced professionals. You can trust that your home is in capable hands.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[800px] mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-heading font-black text-foreground text-[32px] lg:text-[48px] leading-tight mb-4 uppercase">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="text-muted-foreground text-[15px] leading-relaxed mb-12 font-body max-w-[600px] mx-auto">
          Expert plumbing solutions for every home and business. We're here to answer your questions and provide reliable service you can count on.
        </p>

        <Accordion type="single" collapsible className="w-full space-y-3 text-left">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-0 rounded-full overflow-hidden data-[state=open]:rounded-2xl"
            >
              <AccordionTrigger className="px-6 py-4 font-heading font-black text-[14px] lg:text-[15px] uppercase tracking-wide hover:no-underline rounded-full bg-muted data-[state=open]:bg-destructive data-[state=open]:text-destructive-foreground [&[data-state=open]>svg]:text-destructive-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-muted-foreground text-[14px] leading-relaxed bg-muted rounded-b-2xl">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

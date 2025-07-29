import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fqaItems = [
  {
    value: "item-1",
    question: "What types of properties are available?",
    answer:
      "We offer a wide range of properties including luxury villas, beachfront homes, modern apartments, and peaceful retreats across top destinations in Indonesia.",
  },
  {
    value: "item-2",
    question: "How can I schedule a viewing?",
    answer:
      "You can schedule a viewing by using the 'Book a Call' button, contacting us via our website, or reaching out to our team directly through phone or email.",
  },
  {
    value: "item-3",
    question: "Are there any financing options?",
    answer:
      "Yes, we offer flexible payment plans and can connect you with trusted financial institutions for mortgage support. Some properties may also include special promotions.",
  },
  {
    value: "item-4",
    question: "Do you provide property management services?",
    answer:
      "Absolutely. Our team handles maintenance, tenant management, rent collection, and other services to ensure your investment is well taken care of.",
  },
];

export default function FQAPage() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 py-12">
      <div className="space-y-8 max-w-sm">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">
          Find quick answers to common questions about our properties, services,
          and booking process.
        </p>
      </div>
      <div>
        <Accordion
          collapsible
          type="single"
          className="w-full"
          defaultValue="item-1"
        >
          {fqaItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

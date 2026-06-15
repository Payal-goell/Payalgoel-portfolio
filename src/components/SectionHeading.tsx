import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-widest text-gradient mb-3">{eyebrow}</p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-display font-bold relative inline-block"
      >
        {title}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-accent origin-left rounded-full"
        />
      </motion.h2>
    </div>
  );
}

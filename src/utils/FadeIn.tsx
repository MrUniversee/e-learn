import { motion } from 'framer-motion'

function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: '-4px' }}
      animate={{ opacity: 1, y: '4px' }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}
export default FadeIn

// Example component
// Import this component in your pages

import { motion } from 'framer-motion'

interface ExampleComponentProps {
    title?: string
}

export default function ExampleComponent({ title = 'Example' }: ExampleComponentProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h2>
        </motion.div>
    )
}

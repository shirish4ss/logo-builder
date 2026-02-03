import os

pages = [
    ("dashboard", "Admin Overview"),
    ("users", "User Management"),
    ("subscriptions", "Subscription Plans"),
    ("prompts", "AI Prompt Management"),
    ("ai", "AI Model Configuration"),
    ("styles", "Design Styles"),
    ("finance", "Financial Overview"),
    ("support", "Support Tickets"),
    ("audit", "Audit logs"),
    ("settings", "Global Settings"),
    ("system", "System Health"),
    ("media", "Media Library"),
    ("database", "Database Management"),
    ("security", "Security & Compliance"),
    ("api-access", "API Keys & Access"),
    ("maintenance", "Maintenance Mode"),
    ("seo", "SEO Management"),
    ("emails", "Email Templates"),
    ("analytics", "Platform Analytics"),
    ("backups", "System Backups"),
]

template = """\"use client\";

import { motion } from \"framer-motion\";

export default function Page() {
  return (
    <div className=\"p-12\">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className=\"bg-slate-900 border border-slate-800 rounded-[3rem] p-20 text-center shadow-2xl\"
      >
        <h1 className=\"text-4xl font-black text-white mb-6\">{title}</h1>
        <p className=\"text-xl text-slate-400 max-w-2xl mx-auto\">
          This administrative module is active but the detailed UI is currently being refined for the best management experience.
        </p>
        <div className=\"mt-12 flex justify-center\">
            <div className=\"w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin\"></div>
        </div>
      </motion.div>
    </div>
  );
}
"""

for path, title in pages:
    dir_path = f"src/app/admin/{path}"
    os.makedirs(dir_path, exist_ok=True)
    with open(f"{dir_path}/page.tsx", "w") as f:
        f.write(template.replace("{title}", title))

print("Admin pages generated successfully.")

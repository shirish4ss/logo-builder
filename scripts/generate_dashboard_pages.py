import os

pages = [
    ("notifications", "Notifications"),
    ("vectorizer", "Vectorizer"),
    ("share", "Share Links"),
    ("history", "Design History"),
    ("assets", "Brand Assets"),
    ("integrations", "Integrations"),
    ("rewards", "Rewards"),
    ("community", "Community"),
    ("support", "Support"),
    ("settings", "Settings"),
    ("billing", "Billing"),
    ("team", "Team Management"),
    ("favorites", "Favorites"),
    ("guidelines", "Brand Guidelines"),
    ("mockups", "3D Mockups"),
    ("social", "Social Media Kit"),
    ("kit", "Branding Kit"),
    ("gallery", "My Gallery"),
]

template = """\"use client\";

import GenericDashboardPage from \"@/components/dashboard/GenericDashboardPage\";

export default function Page() {
  return <GenericDashboardPage title=\"{title}\" />;
}
"""

for path, title in pages:
    dir_path = f"src/app/dashboard/{path}"
    os.makedirs(dir_path, exist_ok=True)
    with open(f"{dir_path}/page.tsx", "w") as f:
        f.write(template.replace("{title}", title))

print("Dashboard pages generated successfully.")

import AuthExperience from "./auth-experience-client"
import { AuthExperienceShell } from "./components/auth-experience-shell"

export const metadata = {
  title: "Mafile — Access your space",
  description: "A calm, focused authentication experience for Mafile Store.",
}

export default function Page() {
  return (
    <AuthExperienceShell>
      <AuthExperience />
    </AuthExperienceShell>
  )
}

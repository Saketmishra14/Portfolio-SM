import DeveloperToolHero from '../components/developerTool/HeroSection'
import ToolsPageLayout from '../components/developerTool/ToolsPageLayout';
import SEO from "../components/SEO";

const DeveloperToolPage = () => {
  return (
    <>
    <SEO
      title="Developer Tools & Utilities | Saket Mishra"
      description="Use free developer tools built by Saket Mishra, including token generators, hash utilities, encryption tools, UUID and ULID generators, bcrypt utilities, and PDF signature checks."
      path="/tool"
    />

    <DeveloperToolHero/>
    <ToolsPageLayout/>
    </>
  )
}

export default DeveloperToolPage
